import React, {Suspense, useEffect} from 'react';
import Users from "../Users/Users";
import {connect} from "react-redux";
import {
    follow, setCurrentPageSuccess,
    setUsers, unfollow, setUsersSuccess
} from "../../Redux/users-reducer";
import spinner from '../../icons/Spinner.svg'
import Spinner from "../common/Spinner";
const Paginator = React.lazy( () => import("../Users/Paginator/Paginator"))

const FriendsContainer = ({count,users,setUsers,currentPage,setCurrentPageSuccess, setUsersSuccess,
                              totalCount,follow, unfollow, isFetchingNewUsers}) => {
    const onPageChanged = (page) => {
        setUsers(page, count, true);
        setCurrentPageSuccess(page);
    }

    useEffect( () => {
        setUsers(1, count, true);
        return () => {
            setUsersSuccess([])
            setCurrentPageSuccess(1)
        }
    }, []);

    return (
        <>
            {!isFetchingNewUsers
                ?
                <>
                    <Users {...{users,follow,unfollow }}></Users>
                    <Suspense>
                        <Paginator
                            totalCount={totalCount}
                            count={count}
                            currentPage={currentPage}
                            onPageChanged={onPageChanged}/>
                    </Suspense>
                </>
                :
                <Spinner/>
            }
        </>
    );
};
const mstp = (state) => {
    return {
        currentPage: state.users.currentPage,
        count: state.users.count,
        users: state.users.users,
        totalCount: state.users.totalCount,
        isFetchingNewUsers: state.users.isFetchingNewUsers
    }
}


export default connect(mstp, {setCurrentPageSuccess,
    setUsers,
    setUsersSuccess,
    follow,
    unfollow,})(FriendsContainer);
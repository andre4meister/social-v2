import Users from "./Users";
import {
    follow,
    setCurrentPageSuccess,
    setUsers,
    unfollow,
    setUsersSuccess,
} from "../../Redux/users-reducer";
import React,{Suspense, useEffect} from "react";
import {connect} from "react-redux";
import Spinner from "../common/Spinner";

const Paginator = React.lazy( () => import('./Paginator/Paginator'));

const UsersContainer = ({setUsers, setCurrentPageSuccess, count, currentPage, isFetchingNewUsers,
                            totalCount, follow, unfollow, users, setUsersSuccess}) => {
     const onPageChanged = (page) => {
        setUsers(page, count, false, false);
        setCurrentPageSuccess(page);
    }
    useEffect( () => {
        setUsers(1, count, false);
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
    )
}

const mstp = (state) => {
    return {
        currentPage: state.users.currentPage,
        count: state.users.count,
        users: state.users.users,
        totalCount: state.users.totalCount,
        isFetchingNewUsers: state.users.isFetchingNewUsers
    }
}
export default connect(mstp, {setUsers,
                                              setCurrentPageSuccess,
                                              follow,
                                              unfollow,
                                              setUsersSuccess})(UsersContainer) ;
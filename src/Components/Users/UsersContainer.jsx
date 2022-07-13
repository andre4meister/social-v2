import Users from "./Users";
import {follow, setCurrentPageSuccess, setUsers, unfollow, setUsersSuccess} from "../../Redux/users-reducer";
import React,{Suspense, useEffect} from "react";
import {connect} from "react-redux";

const Paginator = React.lazy( () => import('./Paginator/Paginator'));

const UsersContainer = ({setUsers, setCurrentPageSuccess, count, currentPage,
                            totalCount, follow, unfollow, users, setUsersSuccess}) => {
    const onPageChanged = (page) => {
        setUsers(page, count, false, false);
        setCurrentPageSuccess(page);
    }
    useEffect( () => {
        setUsers(currentPage, count, false, false);
        return () => setUsersSuccess([]);
    }, [])
    return (
        <>
            <Users follow={follow} unfollow={unfollow} users={users}></Users>
            <Suspense>
                <Paginator
                    totalCount={totalCount}
                    count={count}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}/>
            </Suspense>
        </>
    )
}
const mstp = (state) => {
    return {
        currentPage: state.users.currentPage,
        count: state.users.count,
        users: state.users.users,
        totalCount: state.users.totalCount,
    }
}
export default connect(mstp, {setUsers,
                                              setCurrentPageSuccess,
                                              follow,
                                              unfollow,
                                              setUsersSuccess})(UsersContainer) ;
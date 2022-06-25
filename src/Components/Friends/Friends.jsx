import React, {useEffect} from 'react';
import Users from "../Users/Users";
import Paginator from "../Users/Paginator/Paginator";
import {connect} from "react-redux";
import {
    follow, setCurrentPageSuccess,
    setUsers, unfollow
} from "../../Redux/users-reducer";

const FriendsContainer = ({count,users,setUsers,currentPage,setCurrentPageSuccess,totalCount,follow, unfollow}) => {
    const onPageChanged = (page) => {
        setUsers(page, count, true);
        setCurrentPageSuccess(page);
    }
    useEffect( () => {
        if (!users) {
            setUsers(currentPage, count, true);
        }
        return () => {
            setCurrentPageSuccess(1);
            setUsers(1, count, true);
        }
    }, []);

    return (
        <>
            <Users {...{users,follow,unfollow }}></Users>
            <Paginator
                totalCount={totalCount}
                count={count}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>
        </>
    );
};
const mstp = (state) => {
    return {
        currentPage: state.users.currentPage,
        count: state.users.count,
        users: state.users.users,
        totalCount: state.users.totalCount,
    }
}


export default connect(mstp, {setCurrentPageSuccess,
    setUsers,
    follow,
    unfollow,})(FriendsContainer);
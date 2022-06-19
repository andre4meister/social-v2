import React, {useEffect} from 'react';
import Users from "../Users/Users";
import Paginator from "../Users/Paginator/Paginator";
import {connect} from "react-redux";
import {
    follow, setCurrentPageSuccess,
    setUsers, unfollow
} from "../../Redux/users-reducer";

const FriendsContainer = (props) => {
    const onPageChanged = (page) => {
        props.setUsers(page, props.count, true);
        props.setCurrentPageSuccess(page);
    }
    useEffect( () => {
        if (!props.users) {
            props.setUsers(props.currentPage, props.count, true);
        }
        return () => {
            props.setCurrentPageSuccess(1);
            props.setUsers(1, props.count, true);
        }
    }, []);

    return (
        <>
            <Users {...props}></Users>
            <Paginator
                totalCount={props.totalCount}
                count={props.count}
                currentPage={props.currentPage}
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
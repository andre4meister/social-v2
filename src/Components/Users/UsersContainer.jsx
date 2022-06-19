import Users from "./Users";
import {follow, setCurrentPageSuccess, setUsers, unfollow} from "../../Redux/users-reducer";
import {useEffect} from "react";
import {connect} from "react-redux";
import Paginator from "./Paginator/Paginator";

const UsersContainer = (props) => {
    const onPageChanged = (page) => {
        props.setUsers(page, props.count, false);
        props.setCurrentPageSuccess(page);
    }
    useEffect( () => {
        props.setUsers(props.currentPage, props.count, false);
    }, [])
    return (
        <>
            <Users {...props}></Users>
            <Paginator
                totalCount={props.totalCount}
                count={props.count}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}/>
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
export default connect(mstp, {setUsers, setCurrentPageSuccess, follow, unfollow})(UsersContainer) ;
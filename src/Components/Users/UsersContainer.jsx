import Users from "./Users";
import {setUsers} from "../../Redux/users-reducer";
import {useEffect} from "react";
import {connect} from "react-redux";
import Paginator from "./Paginator/Paginator";

const UsersContainer = (props) => {
    useEffect( () => {
        props.setUsers(props.currentPage, props.count)
    }, [])
    return (
        <>
            <Users {...props}></Users>
            <Paginator totalCount={props.totalCount} count={props.count} currentPage={props.currentPage}/>
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
export default connect(mstp, {setUsers})(UsersContainer) ;
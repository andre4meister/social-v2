import Users from "./Users";
import {follow, setCurrentPageSuccess, setUsers, unfollow, setUsersSuccess} from "../../Redux/users-reducer";
import {useEffect} from "react";
import {connect} from "react-redux";
import Paginator from "./Paginator/Paginator";

const UsersContainer = ({setUsers,setCurrentPageSuccess,count,currentPage,totalCount,follow,unfollow,users,setUsersSuccess}) => {
    console.log('fsdf')
    const onPageChanged = (page) => {
        setUsers(page, count, false, false);
        setCurrentPageSuccess(page);
    }
    useEffect( () => {
        setUsers(currentPage, count, false, false);
        return () => setUsersSuccess([])
    }, [])
    return (
        <>
            <Users follow={follow} unfollow={unfollow} users={users}></Users>
            <Paginator
                totalCount={totalCount}
                count={count}
                currentPage={currentPage}
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
export default connect(mstp, {setUsers, setCurrentPageSuccess, follow, unfollow,setUsersSuccess})(UsersContainer) ;
import FriendsSidebar from "./FriendsSidebar";
import NavSidebar from "./NavSidebar";
import '../../App.scss';
import {connect} from "react-redux";
import {setUsers} from "../../Redux/users-reducer";
import {useEffect} from "react";
import {login, logout} from "../../Redux/authReducer";
import Header from "../Header/Header";


const BarsContainer = ({bestFriends, setUsers,login,logout,userId}) => {
    useEffect( () => {
        setUsers(1, 7, true, true);
    }, [])
  return (
      <>
          <Header {...{login,logout}}/>
          <FriendsSidebar bestFriends={bestFriends}/>
          <NavSidebar userId={userId}/>
      </>
  )
}

function mstp(state) {
    return {
        bestFriends: state.users.bestFriends,
        login: state.auth.login,
        userId: state.auth.userId,
    }
}

export default connect(mstp, {setUsers, login, logout})(BarsContainer);
import FriendsSidebar from "./FriendsSidebar";
import HeaderContainer from "../Header/HeaderContainer";
import NavSidebar from "./NavSidebar";
import '../../App.scss';
import {connect} from "react-redux";
import {setUsers} from "../../Redux/users-reducer";
import {useEffect} from "react";
const BarsContainer = ({bestFriends, setUsers}) => {
    useEffect( () => {
        setUsers(1, 7, true, true);
    }, [])
  return (
      <>
          <HeaderContainer/>
          <FriendsSidebar bestFriends={bestFriends}/>
          <NavSidebar/>
      </>

  )
}

function mstp(state) {
    return {
        bestFriends: state.users.bestFriends
    }
}

export default connect(mstp, {setUsers})(BarsContainer);
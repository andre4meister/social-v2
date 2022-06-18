import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/authReducer";
import {useEffect} from "react";

const HeaderContainer = (props) => {
    useEffect( ()=> {
        props.getAuthUserData();
    }, []);

  return (
      <div>
          <Header {...props}/>
      </div>
  )
}
const mstp = (state) => {
    return {
        login: state.auth.login,
        authUserId: state.auth.userId,
    }
}
export default connect(mstp,{logout, getAuthUserData})(HeaderContainer) ;
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";

const HeaderContainer = (props) => {

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
export default connect(mstp,{logout})(HeaderContainer) ;
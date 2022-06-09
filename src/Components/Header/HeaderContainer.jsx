import Header from "./Header";
import {connect} from "react-redux";

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
    }
}
export default connect(mstp,{})(HeaderContainer) ;
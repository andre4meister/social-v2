import Profile from "./Profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getUserData} from "../../Redux/authReducer";


const mstp = (state) => {
    return {
        posts: state.profile.posts,
        followers: state.profile.followers,
        following: state.profile.following,
        login: state.auth.login,
    }
}
const ProfileContainer = (props) => {
    useEffect( ()=> {
        props.getUserData();
    }, [props.login])
  return (
      <div>
          <Profile posts={props.posts}
                   followers={props.followers}
                   following={props.following}
                   login={props.login} />
      </div>
  )
}
export default connect(mstp,{getUserData})(ProfileContainer);
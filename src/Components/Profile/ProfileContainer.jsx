import Profile from "./Profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getAuthUserData,} from "../../Redux/authReducer";
import {useNavigate, useParams} from "react-router-dom";
import {getUserProfile, getUserStatus} from "../../Redux/profile-reducer";
import PostsContainer from "./Posts/PostsContainer";

const mstp = (state) => {
    return {
        posts: state.profile.posts,
        followers: state.profile.followers,
        following: state.profile.following,
        login: state.auth.login,
        profileData: state.profile.data,
        status: state.profile.status,
        isAuth: state.auth.isAuth,
    }
}
const ProfileContainer = (props) => {
    const params = useParams();

    const toLogin = useNavigate();
    if (!props.isAuth) {
        toLogin('/login');
    }
    useEffect( ()=> {
            props.getUserProfile(params.userId);
            props.getUserStatus(params.userId);
    }, [params])

  return (
      <>
          <Profile posts={props.posts}
                   followers={props.followers}
                   following={props.following}
                   login={props.login}
                   params={params}
                   getAuthUserData={props.getAuthUserData}
                   getUserProfile={props.getUserProfile}
                   getUserStatus={props.getUserStatus}
                   profileData={props.profileData}/>
          <PostsContainer />
      </>
  )
}
export default connect(mstp,{getAuthUserData, getUserProfile, getUserStatus})(ProfileContainer);
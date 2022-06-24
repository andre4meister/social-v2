import Profile from "./Profile";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getAuthUserData, toggleIsFetching,} from "../../Redux/authReducer";
import {useNavigate, useParams} from "react-router-dom";
import {getUserProfile, getUserStatus, updateProfileInfo, updateProfilePhoto} from "../../Redux/profile-reducer";
import PostsContainer from "./Posts/PostsContainer";

const mstp = (state) => {
    return {
        posts: state.profile.posts,
        status: state.profile.status,
        login: state.auth.login,
        profileData: state.profile.data,
        isAuth: state.auth.isAuth,
        authUserId: state.auth.userId,
    }
}
const ProfileContainer = (props) => {
    const params = useParams();

    const toLogin = useNavigate();
    if (!props.isAuth) {
        toLogin('/login');
    }
    const [authUserProfile, setAuthUserProfile] = useState(false);

    useEffect( ()=> {
        (+params.userId === +props.authUserId) ? setAuthUserProfile(true) : setAuthUserProfile(false)
        props.getUserProfile(params.userId);
        props.getUserStatus(params.userId);
    }, [params])

  return (
      <>
          <Profile authUserProfile={authUserProfile}
                   posts={props.posts}
                   status={props.status}
                   login={props.login}
                   params={params}
                   aboutMe={props.aboutMe}
                   getAuthUserData={props.getAuthUserData}
                   getUserProfile={props.getUserProfile}
                   getUserStatus={props.getUserStatus}
                   updateProfileInfo={props.updateProfileInfo}
                   updateProfilePhoto={props.updateProfilePhoto}
                   profileData={props.profileData}/>
          <PostsContainer />
      </>
  )
}
export default connect(mstp,{getAuthUserData,
                                             getUserProfile,
                                             getUserStatus,
                                             updateProfileInfo,
                                             updateProfilePhoto,
                                             toggleIsFetching})(ProfileContainer);
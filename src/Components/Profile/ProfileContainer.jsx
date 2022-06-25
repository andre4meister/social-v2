import Profile from "./Profile";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getAuthUserData} from "../../Redux/authReducer";
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
const ProfileContainer = ({isAuth,authUserId,getUserProfile,getUserStatus,posts,status,login,aboutMe,getAuthUserData,
                              updateProfileInfo, updateProfilePhoto,profileData}) => {
    const params = useParams();

    const toLogin = useNavigate();
    if (!isAuth) {
        toLogin('/login');
    }
    const [authUserProfile, setAuthUserProfile] = useState(false);

    useEffect( ()=> {
        (+params.userId === +authUserId) ? setAuthUserProfile(true) : setAuthUserProfile(false)
        getUserProfile(params.userId);
        getUserStatus(params.userId);
    }, [params])

  return (
      <>
          <Profile authUserProfile={authUserProfile}
                   posts={posts}
                   status={status}
                   login={login}
                   params={params}
                   aboutMe={aboutMe}
                   getAuthUserData={getAuthUserData}
                   getUserProfile={getUserProfile}
                   getUserStatus={getUserStatus}
                   updateProfileInfo={updateProfileInfo}
                   updateProfilePhoto={updateProfilePhoto}
                   profileData={profileData}/>
          <PostsContainer />
      </>
  )
}
export default connect(mstp,{getAuthUserData,
                                             getUserProfile,
                                             getUserStatus,
                                             updateProfileInfo,
                                             updateProfilePhoto})(ProfileContainer);
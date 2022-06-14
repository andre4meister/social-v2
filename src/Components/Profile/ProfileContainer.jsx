import Profile from "./Profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getAuthUserData,} from "../../Redux/authReducer";
import {useParams} from "react-router-dom";
import {getUserProfile, getUserStatus} from "../../Redux/profile-reducer";

const mstp = (state) => {
    return {
        posts: state.profile.posts,
        followers: state.profile.followers,
        following: state.profile.following,
        login: state.auth.login,
        profileData: state.profile.data,
        status: state.profile.status,
    }
}
const ProfileContainer = (props) => {
    const params = useParams();
    useEffect( ()=> {
        props.getAuthUserData();
        console.log('1 effect')
    }, []);
    useEffect( ()=> {
        props.getUserProfile(params.userId);
        props.getUserStatus(params.userId);
        console.log('2 effect')
    }, [params.userId])
  return (
      <div>
          <Profile posts={props.posts}
                   followers={props.followers}
                   following={props.following}
                   login={props.login}
                   params={params}
                   getAuthUserData={props.getAuthUserData}
                   getUserProfile={props.getUserProfile}
                   getUserStatus={props.getUserStatus} />
      </div>
  )
}
export default connect(mstp,{getAuthUserData, getUserProfile, getUserStatus})(ProfileContainer);
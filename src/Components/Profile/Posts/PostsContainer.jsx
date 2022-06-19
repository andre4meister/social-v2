import React from 'react';
import {connect} from "react-redux";
import Posts from "./Posts";
import NewPost from "./NewPost";
import './Posts.scss';
import Preloader from "../../common/Preloader";
import {deletePostSuccess, uploadPostPhoto} from "../../../Redux/profile-reducer";

const PostsContainer = (props) => {
    if (!props.profileData) {
        return <Preloader/>
    }
    return (
        <div className={'posts-container'}>
            <NewPost uploadPostPhoto={props.uploadPostPhoto}/>
            <Posts profileData={props.profileData}
                   deletePostSuccess={props.deletePostSuccess}
                   posts={props.posts}/>
        </div>
    );
};

const mstp = (state) => {
    return {
        posts: state.profile.posts,
        profileData: state.profile.data,
    }
}

export default connect(mstp, {uploadPostPhoto, deletePostSuccess})(PostsContainer);
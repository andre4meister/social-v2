import React from 'react';
import {connect} from "react-redux";
import Posts from "./Posts";
import NewPost from "./NewPost";
import './Posts.scss';
import {deletePostSuccess, uploadPostPhoto} from "../../../Redux/profile-reducer";

const PostsContainer = ({profileData,uploadPostPhoto,deletePostSuccess, posts}) => {
    if (!profileData) {
        return null
    }
    return (
        <div className={'posts-container'}>
            <NewPost uploadPostPhoto={uploadPostPhoto}/>
            <Posts profileData={profileData}
                   deletePostSuccess={deletePostSuccess}
                   posts={posts}/>
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
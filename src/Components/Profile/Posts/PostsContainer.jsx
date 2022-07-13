import React, {Suspense} from 'react';
import {connect} from "react-redux";
import NewPost from "./NewPost";
import './Posts.scss';
import {deletePostSuccess, uploadPostPhoto} from "../../../Redux/profile-reducer";

const Posts = React.lazy(() => import('./Posts'));
const PostsContainer = ({profileData,uploadPostPhoto,deletePostSuccess, posts}) => {
    if (!profileData) {
        return null
    }
    return (
        <div className={'posts-container'}>
            <NewPost uploadPostPhoto={uploadPostPhoto}/>
            <Suspense>
                <Posts profileData={profileData}
                       deletePostSuccess={deletePostSuccess}
                       posts={posts}/>
            </Suspense>
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
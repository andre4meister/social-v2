import React, {Suspense} from 'react';
import {connect} from "react-redux";
import NewPost from "./NewPost";
import './Posts.scss';
import {deletePostSuccess, uploadingPostPhotoToggle, uploadPostPhoto} from "../../../Redux/profile-reducer";

const Posts = React.lazy(() => import('./Posts'));
const PostsContainer = ({profileData,uploadPostPhoto,deletePostSuccess, posts, isFetchingPostPhoto}) => {
    if (!profileData) {
        return null
    }
    return (
        <div className={'posts-container'}>
            <NewPost
                isFetchingPostPhoto={isFetchingPostPhoto}
                uploadPostPhoto={uploadPostPhoto}
                uploadingPostPhotoToggle={uploadingPostPhotoToggle}/>
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
        isFetchingPostPhoto: state.profile.isFetchingPostPhoto
    }
}

export default connect(mstp, {uploadPostPhoto, deletePostSuccess})(PostsContainer);
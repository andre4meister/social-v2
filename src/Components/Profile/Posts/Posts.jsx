import React from 'react';
import Post from "./Post";

const Posts = ({profileData,posts,deletePostSuccess}) => {
    return (
        <div className={'posts'}>
            {posts.map( p => {
                return <Post p={p}
                             profileData={profileData}
                             deletePostSuccess={deletePostSuccess}/>
            })}
        </div>
    );
};

export default Posts;
import React from 'react';
import Post from "./Post";

const Posts = (props) => {
    return (
        <div className={'posts'}>
            {props.posts.map( p => {
                return <Post p={p} profileData={props.profileData}/>
            })}
        </div>
    );
};

export default Posts;
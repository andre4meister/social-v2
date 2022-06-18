import React, {useState} from 'react';
import './Posts.scss';
import {createNewPostSuccess} from "../../../Redux/profile-reducer";

const NewPost = (props) => {
    const [newPostText, setNewPostText] = useState('');

    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();

    const createPost = (newPostText) => {
        props.createNewPostSuccess({id: 6589, text: newPostText, time: time, imgUrl: '', likes: 0});
        setNewPostText('');
    }

    return (
        <div className={'new-post'}>
            <h3>Create new post</h3>
            <input value={newPostText} onChange={ (e) => setNewPostText(e.target.value)}
                   type={'text'} placeholder={'Write your text for post'}/>
            <button onClick={ () => createPost(newPostText)}>Add post</button>
        </div>
    );
};

export default NewPost;
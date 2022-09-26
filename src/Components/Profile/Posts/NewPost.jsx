import React, {useEffect, useState} from 'react';
import './Posts.scss';
import Preloader from "../../common/Preloader";

const NewPost = ({uploadPostPhoto}) => {
    const [newPostText, setNewPostText] = useState('');

    const today = new Date();
    const time = today.getHours() + ":" + ((today.getMinutes() > 9) ? today.getMinutes() : '0' + today.getMinutes());

    const randomId = Math.floor(Math.random() * 1000);

    const createPost = (newPostText) => {
        uploadPostPhoto(randomId, newPostText, time, 0);
        setNewPostText('');
    }

    return (
        <div className={'new-post'}>
            <h3>Create new post</h3>
            <input className={'post-text'}
                   value={newPostText} onChange={(e) => setNewPostText(e.target.value)}
                   type={'text'}
                   placeholder={'Write your text for post'}
                   required={true}/>
                <button onClick={() => createPost(newPostText)}>Add post</button>
        </div>
    );
};

export default NewPost;
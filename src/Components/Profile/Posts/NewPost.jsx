import React, {useState} from 'react';
import './Posts.scss';
import downloadPhoto from '../../../icons/download.png';
import {uploadPostPhoto} from "../../../Redux/profile-reducer";
import axios from "axios";
const NewPost = (props) => {
    const [newPostText, setNewPostText] = useState('');

    const today = new Date();
    const time = today.getHours() + ":" + ((today.getMinutes() > 9) ? today.getMinutes() : '0' + today.getMinutes());

    const randomId = Math.floor(Math.random()*1000);


    // const [selectedFile, setSelectedFile] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);

    // const handleChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    //     setIsFilePicked(true);
    // }
    const createPost = (newPostText) => {
        props.uploadPostPhoto( randomId, newPostText, time, 0);
        setNewPostText('');
        // // getPhoto(selectedFile)
        //     .then( response => console.log(response))
        // setIsFilePicked(false);
        // setSelectedFile(null)
    }

    return (
        <div className={'new-post'}>
            <h3>Create new post</h3>
            <input  className={'post-text'} value={newPostText} onChange={ (e) => setNewPostText(e.target.value)}
                   type={'text'} placeholder={'Write your text for post'} required={true} />
            <button onClick={ () => createPost(newPostText)}>Add post</button>
        </div>
    );
};

export default NewPost;
import React from 'react';

const Post = ({p, profileData}) => {
    return (
        <div className={'post'}>
            <div className={'photo-name'}>
                <img src={profileData.photos.small} alt={'small-avatar'}/>
                <div className={'name-time'}>
                    <h4>{profileData.fullName}</h4>
                    <div>{p.time}</div>
                </div>

            </div>
            <img src={p.imgUrl} key={p.id}/>
            <div className={'post-text'}>{p.text}</div>
            <div className={'likes'}>
                <img src={'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/icon/01.png'}
                     alt={'likes'} key={p.id*20}/>
                <p>{p.likes} likes</p>
            </div>
        </div>
    );
};

export default Post;
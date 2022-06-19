import React, {useState} from 'react';
import dotsMenu from '../../../icons/menu-dots.svg';

const Post = ({p, profileData,deletePostSuccess}) => {
    const [showMenu, setShowingMenu] = useState(false);
    const deletePostBtn = (e) => {
        deletePostSuccess(p.id);
        setShowingMenu(false);
    }
    return (
        <div className={'post'} key={p.id}>
            <div className={'photo-name'}>
                <img src={profileData.photos.small} alt={'small-avatar'}/>
                <div className={'name-time'}>
                    <h4>{profileData.fullName}</h4>
                    <div>{p.time}</div>
                </div>
                <div className={'post-menu'}>
                    <img src={dotsMenu} alt={'post-menu-img'}
                         onClick={ () => setShowingMenu(!showMenu)}/>
                    <div className={showMenu ? 'activeMenu' : 'hiddenMenu activeMenu'}>
                        <div onClick={ deletePostBtn}>Delete Post</div>
                        <div>Edit Post</div>
                    </div>
                </div>

            </div>
            <img src={p.imgUrl} />
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
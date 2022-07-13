import React from 'react';

const SocialMedia = ({contacts}) => {
    return (
        <div className={'social-media'}>
            <a href={contacts.facebook}><img alt={'facebook'}
                                             src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png'}/></a>
            <a href={contacts.instagram}><img alt={'instagram'}
                                              src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png'}/></a>
            <a href={contacts.github}><img alt={'github'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}/></a>
            <a href={contacts.website}><img alt={'linkedin'}  src={'https://cdn-icons-png.flaticon.com/512/174/174857.png'}/></a>
            <a href={contacts.twitter}><img alt={'twitter'} src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'}/></a>
        </div>
    );
};

export default SocialMedia;
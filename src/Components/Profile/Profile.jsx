import './Profile.scss';
import Preloader from "../common/Preloader";


const Profile = (props) => {
    if (!props.profileData) {
        return <Preloader/>
    }
  return (
      <div className={'content-container'}>
          <div className={'profile-info'}>
              <img className={'large-photo'} alt={'big-photo'}
                   src={props.profileData.photos.large}/>
              <img className={'small-photo'} alt={'small-photo'}
                   src={props.profileData.photos.small}/>
              <div className={'info-block'}>
                  <div className={'social-media info-item'}>
                      <a href={props.profileData.contacts.facebook}><img alt={'facebook'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png'}/></a>
                      <a href={props.profileData.contacts.instagram}><img alt={'instagram'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png'}/></a>
                      <a href={props.profileData.contacts.github}><img alt={'github'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}/></a>
                      <a href={props.profileData.contacts.vk}><img alt={'linkedin'}  src={'https://cdn-icons-png.flaticon.com/512/174/174857.png'}/></a>
                      <a href={props.profileData.contacts.twitter}><img alt={'twitter'} src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'}/></a>
                  </div>
                  <div className={'login info-item'}>{props.profileData.fullName}</div>
                  <div className={'status info-item'}>
                      <div className={'status-item'}>Posts</div>
                      <div className={'status-item'}>Followers</div>
                      <div className={'status-item'}>Following</div>
                      <div className={'status-item'}>{props.posts.length}</div>
                      <div className={'status-item'}>{props.followers}</div>
                      <div className={'status-item'}>{props.following}</div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Profile;
import './Profile.scss';
import NavSidebar from "../Sidebars/NavSidebar";
import FriendsSidebar from "../Sidebars/FriendsSidebar";



const Profile = (props) => {
  return (
      <div className={'profile-container'}>
          <div className={'profile-info'}>
              <img className={'large-photo'} alt={'big-photo'}
                   src={'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg1.jpg'}/>
              <img className={'small-photo'} alt={'small-photo'}
                   src={'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png'}/>
              <div className={'info-block'}>
                  <div className={'social-media info-item'}>
                      <a href={'#'}><img alt={'facebook'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png'}/></a>
                      <a href={'#'}><img alt={'instagram'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'}/></a>
                      <a href={'#'}><img alt={'github'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}/></a>
                      <a href={'#'}><img alt={'linkedin'}  src={'https://cdn-icons-png.flaticon.com/512/174/174857.png'}/></a>
                      <a href={'#'}><img alt={'twitter'} src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'}/></a>
                  </div>
                  <div className={'login info-item'}>{props.login}</div>
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
          <NavSidebar {...props}/>
          <FriendsSidebar {...props}/>
      </div>
  )
}
export default Profile;
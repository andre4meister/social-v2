import './Profile.scss';

const Profile = (props) => {

  return (
      <div className={'profile-container'}>
          <div className={'profile-info'}>
              <div className={'photos-block'}>
                  <img className={'large-photo'} src={'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg1.jpg'}/>
                  <img className={'small-photo'} src={'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png'}/>
                  <img className={'change'} src={''}/>
                  <img className={'change'} src={''}/>
              </div>
              <div className={'info-block'}>
                  <div className={'social-media info-item'}></div>
                  <div className={'login info-item'}>{props.login}</div>
                  <div className={'status info-item'}>
                      I learn js and react
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Profile;
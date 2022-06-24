import './Profile.scss';
import Preloader from "../common/Preloader";
import pencil from '../../icons/pencil.svg'
import portrait from '../../icons/portrait.svg'

import {useState} from "react";
import EditProfileForm from "./EditProfileForm";
import EditPhotoForm from "./EditPhotoForm";
import {updateProfilePhoto} from "../../Redux/profile-reducer";


const Profile = (props) => {
    const [infoEditMode, setInfoEditMode] = useState(false);
    const [photoEditMode, setPhotoEditMode] = useState(false);

    if (!props.profileData) {
        return <Preloader/>
    }

  return (
      <div className={'content-container'}>
          <div className={'profile-info'}>
              { !(infoEditMode || photoEditMode) && <img className={'large-photo'} alt={'big-photo'}
                   src={props.profileData.photos.large}/> }
              { !(infoEditMode || photoEditMode) && <img className={'small-photo'} alt={'small-photo'}
                   src={props.profileData.photos.small}/> }
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
                      <div className={'status-item status-tag'}>Status</div>
                      <div className={'status-item about-tag'}>About</div>
                      <div className={'status-item status-text'}>{props.status}</div>
                      <div className={'status-item about'}>{props.profileData.aboutMe}</div>
                  </div>
                  {props.authUserProfile && <img className={'edit-profile info-edit'} src={pencil} alt={'edit profile'} onClick={ () => setInfoEditMode(!infoEditMode)}/>}
                  {props.authUserProfile && <img className={'edit-profile photo-edit'} src={portrait} alt={'edit user`s avatar'} onClick={ () => setPhotoEditMode(!photoEditMode)}/>}
              </div>
              { infoEditMode && <EditProfileForm updateProfileInfo={props.updateProfileInfo} userId={props.params.userId}/>}
              { photoEditMode && <EditPhotoForm updateProfilePhoto={props.updateProfilePhoto}/>}
          </div>
      </div>
  )
}
export default Profile;
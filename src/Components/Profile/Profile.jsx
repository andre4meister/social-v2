import './Profile.scss';
import pencil from '../../icons/pencil.svg';
import portrait from '../../icons/portrait.svg';
import document from '../../icons/document.svg';
import {useState} from "react";
import EditProfileForm from "./EditProfileForm";
import EditPhotoForm from "./EditPhotoForm";
import EditStatusForm from "./EditStatusForm";



const Profile = ({profileData,status,authUserProfile,updateProfileInfo,params,updateProfilePhoto,updateStatus}) => {
    const [infoEditMode, setInfoEditMode] = useState(false);
    const [photoEditMode, setPhotoEditMode] = useState(false);
    const [statusEditMode, setStatusEditMode] = useState(false);


    if (!profileData) {
        return null
    }
    const contacts = profileData.contacts;

  return (
      <div className={'content-container'}>
          <div className={'profile-info'}>
              { !(infoEditMode || photoEditMode || statusEditMode) && <img className={'large-photo'} alt={'big'}
                   src={profileData.photos.large}/> }
                  <div className={'social-media'}>
                      <a href={contacts.facebook}><img alt={'facebook'}
                         src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png'}/></a>
                      <a href={contacts.instagram}><img alt={'instagram'}
                         src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png'}/></a>
                      <a href={contacts.github}><img alt={'github'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}/></a>
                      <a href={contacts.website}><img alt={'linkedin'}  src={'https://cdn-icons-png.flaticon.com/512/174/174857.png'}/></a>
                      <a href={contacts.twitter}><img alt={'twitter'} src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'}/></a>
                  </div>
                  <div className={'info'}>
                      <div className={'login'}>{profileData.fullName}</div>
                      <div className={'user-info'}>
                          <div className={'info-tags'}>
                              <div className={'status-item'}>Status</div>
                              <div className={'status-item'}>About</div>
                              <div className={'status-item'}>Looking job description</div>
                          </div>
                          <div className={'info-data'}>
                              <div className={'status-item'}>{status}</div>
                              <div className={'status-item'}>{profileData.aboutMe}</div>
                              <div className={'status-item'}>{profileData.lookingForAJobDescription}</div>
                          </div>
                      </div>
                  </div>
              <div className={'editing-btns'}>
                  {authUserProfile && <span className={'edit-profile info-edit'}
                                            onClick={ () => setInfoEditMode(!infoEditMode)}>Edit profile info
                      <img  src={pencil} alt={'edit profile'}
                           />
                  </span>}
                  {authUserProfile && <span className={'edit-profile photo-edit'}
                                            onClick={ () => setPhotoEditMode(!photoEditMode)}>Update photo
                      <img  src={portrait} alt={'edit user`s avatar'}
                           />
                  </span>}
                  {authUserProfile && <span className={'edit-profile status-edit'}
                                            onClick={ () => setStatusEditMode(!statusEditMode)}>Change status
                      <img  src={document} alt={'edit user`s status'}
                           />
                  </span>}
              </div>
              { infoEditMode && <EditProfileForm updateProfileInfo={updateProfileInfo} userId={params.userId}
                                                 profileData={profileData}/>}
              { photoEditMode && <EditPhotoForm updateProfilePhoto={updateProfilePhoto}
                                                setPhotoEditMode={setPhotoEditMode}/>}
              { statusEditMode && <EditStatusForm updateStatus={updateStatus} /> }
          </div>
      </div>
  )
}
export default Profile;
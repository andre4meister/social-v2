import './Profile.scss';
import React from "react";
import pencil from '../../icons/pencil.svg';
import portrait from '../../icons/portrait.svg';
import document from '../../icons/document.svg';
import {Suspense, useState} from "react";
import EditProfileForm from "./EditProfileForm";
import EditPhotoForm from "./EditPhotoForm";
import EditStatusForm from "./EditStatusForm";
const SocialMedia = React.lazy( () => import('./SocialMedia'));


const Profile = ({profileData,status,authUserProfile,updateProfileInfo,params,updateProfilePhoto,updateStatus}) => {
    const [editMode, setEditMode] = useState(null);


    if (!profileData) {
        return null
    }
    const contacts = profileData.contacts;

  return (
      <div className={'content-container'}>
          <div className={'profile-info'}>
              { editMode === null && <img className={'large-photo'} alt={'big'}
                   src={profileData.photos.large}/> }
                  <Suspense>
                      <SocialMedia contacts={contacts}/>
                  </Suspense>
                  <div className={'info'}>
                      <div className={'info__login'}>{profileData.fullName}</div>
                      <div className={'user-info'}>
                          <div className={'user-info__block'}>
                              <div className={'status-item status-tag'}>Status</div>
                              <div className={'status-item'}>{status}</div>
                          </div>
                          <div className={'user-info__block'}>
                              <div className={'status-item status-tag'}>About</div>
                              <div className={'status-item'}>{profileData.aboutMe}</div>
                          </div>
                          <div className={'user-info__block'}>
                              <div className={'status-item status-tag'}>Looking job description</div>
                              <div className={'status-item'}>{profileData.lookingForAJobDescription}</div>
                          </div>
                      </div>
                  </div>
              <div className={'editing-btns'}>
                  {authUserProfile && <span className={'edit-profile info-edit'}
                                            onClick={ () => setEditMode('edit-info')}>Edit profile info
                      <img  src={pencil} alt={'edit profile'}
                           />
                  </span>}
                  {authUserProfile && <span className={'edit-profile photo-edit'}
                                            onClick={ () => setEditMode('edit-photo')}>Update photo
                      <img  src={portrait} alt={'edit user`s avatar'}
                           />
                  </span>}
                  {authUserProfile && <span className={'edit-profile status-edit'}
                                            onClick={ () => setEditMode('edit-status')}>Change status
                      <img  src={document} alt={'edit user`s status'}
                           />
                  </span>}
              </div>
              { editMode === 'edit-info' && <EditProfileForm updateProfileInfo={updateProfileInfo} userId={params.userId}
                                                 profileData={profileData} setEditMode={setEditMode}/>}
              { editMode === 'edit-photo' && <EditPhotoForm updateProfilePhoto={updateProfilePhoto}
                                                            setEditMode={setEditMode}/>}
              { editMode === 'edit-status' && <EditStatusForm updateStatus={updateStatus} setEditMode={setEditMode} /> }
          </div>
      </div>
  )
}
export default Profile;
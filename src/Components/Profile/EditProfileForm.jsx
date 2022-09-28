import React, {useState} from 'react';
import BlueButton from "../common/BlueButton";
import './EditForms.scss';

const EditProfileForm = ({updateProfileInfo, userId, profileData, setEditMode}) => {

    const [userInfo, setUserInfo] = useState(profileData)
    const onEditSubmit = () => {
        updateProfileInfo({ userId, ...userInfo})
    }
    return (
        <div className={'editing-form'}>
            <div className={'close-container'}>
                <button className={'btn-close'} onClick={ () => setEditMode(null)}> </button>
            </div>
            <h4 className={'general'}>General info</h4>
            <div className={'general-div div'}>
                <div>
                    <span>Your name:  </span>
                    <input className={'fullName'} value={userInfo.fullName} placeholder={'Your name...'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, fullName: e.target.value})))}/>
                </div>
                <div>
                    <span>About me:  </span>
                    <input className={'aboutMe'} value={userInfo.aboutMe} placeholder={'Tell about you...'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, aboutMe: e.target.value})))}/>
                </div>
                <div>
                    <span>Do you search a job?  </span>
                    <input className={'lookingForAJob'} type={'checkbox'} value={userInfo.lookingForAJob} placeholder={'Are you looking for a job?'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, lookingForAJob: Boolean(e.target.value)})))}/>
                </div>
                <div>
                    <span>What job do you want?  </span>
                    <input className={'lookingForAJobDescription'} value={userInfo.lookingForAJobDescription} placeholder={'What job do you want?'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, lookingForAJobDescription: e.target.value})))}/>
                </div>
            </div>
            <h4 className={'contacts'}>Contacts</h4>
            <div className={'contacts-div div'}>
                <div>
                    <span>Github:  </span>
                    <input className={'github'} value={userInfo.contacts.github} placeholder={'Your github account...'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, contacts: {...prevState.contacts, github: e.target.value}})))}/>
                </div>
                <div>
                    <span>Facebook:  </span>
                    <input className={'facebook'} value={userInfo.contacts.facebook} placeholder={'Your facebook account...'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, contacts: {...prevState.contacts, facebook: e.target.value}})))}/>
                </div>
                <div>
                    <span>Instagram:  </span>
                    <input className={'instagram'} value={userInfo.contacts.instagram} placeholder={'Your instagram account...'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, contacts: {...prevState.contacts, instagram: e.target.value}})))}/>
                </div>
                <div>
                    <span>Twitter:  </span>
                    <input className={'twitter'} value={userInfo.contacts.twitter} placeholder={'Your twitter account...'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, contacts: {...prevState.contacts, twitter: e.target.value}})))}/>
                </div>
                <div>
                    <span>Website:  </span>
                    <input className={'website'} value={userInfo.contacts.website} placeholder={'Your website...'}
                           onChange={ (e) => setUserInfo((prevState => ({...prevState, contacts: {...prevState.contacts, website: e.target.value}})))}/>
                </div>
            </div>
            <BlueButton text={'Submit editing'} method={onEditSubmit} submitData={{...userInfo, userId}}/>
        </div>
    );
};

export default EditProfileForm;
import React, {useState} from 'react';
import BlueButton from "../common/BlueButton";
import './EditForms.scss';

const EditProfileForm = ({updateProfileInfo, userId, profileData}) => {

    const [name, setName] = useState(profileData.fullName);
    const [aboutMe, setAboutMe] = useState(profileData.aboutMe);
    const [searchJob, setSearchJob] = useState(profileData.lookingForAJob);
    const [likedJob, setLikedJob] = useState(profileData.lookingForAJobDescription);
    const [github, setGithub] = useState(profileData.contacts.github);
    const [website, setWebsite] = useState(profileData.contacts.website);
    const [facebook, setFacebook] = useState(profileData.contacts.facebook);
    const [instagram, setInstagram] = useState(profileData.contacts.instagram);
    const [twitter, setTwitter] = useState(profileData.contacts.twitter);

    const onEditSubmit = () => {
        updateProfileInfo({ userId, lookingForAJob: Boolean(searchJob),
            lookingForAJobDescription: likedJob, fullName: name, aboutMe,
            github, instagram, facebook, website, twitter})
    }

    return (
        <div className={'editing-form'}>
            <h4 className={'general'}>General info</h4>
            <div className={'general-div div'}>
                <div>
                    <span>Your name:  </span>
                    <input className={'fullName'} value={name} placeholder={'Your name...'}
                           onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div>
                    <span>About me:  </span>
                    <input className={'aboutMe'} value={aboutMe} placeholder={'Tell about you...'}
                           onChange={ (e) => setAboutMe(e.target.value)}/>
                </div>
                <div>
                    <span>Do you search a job?  </span>
                    <input className={'lookingForAJob'} type={'checkbox'} value={searchJob} placeholder={'Are you looking for a job?'}
                           onChange={ (e) => setSearchJob(e.target.value)}/>
                </div>
                <div>
                    <span>What job do you want?  </span>
                    <input className={'lookingForAJobDescription'} value={likedJob} placeholder={'What job do you want?'}
                           onChange={ (e) => setLikedJob(e.target.value)}/>
                </div>
            </div>
            <h4 className={'contacts'}>Contacts</h4>
            <div className={'contacts-div div'}>
                <div>
                    <span>Github:  </span>
                    <input className={'github'} value={github} placeholder={'Your github account...'}
                           onChange={ (e) => setGithub(e.target.value)}/>
                </div>
                <div>
                    <span>Facebook:  </span>
                    <input className={'facebook'} value={facebook} placeholder={'Your facebook account...'}
                           onChange={ (e) => setFacebook(e.target.value)}/>
                </div>
                <div>
                    <span>Instagram:  </span>
                    <input className={'instagram'} value={instagram} placeholder={'Your instagram account...'}
                           onChange={ (e) => setInstagram(e.target.value)}/>
                </div>
                <div>
                    <span>Twitter:  </span>
                    <input className={'twitter'} value={twitter} placeholder={'Your twitter account...'}
                           onChange={ (e) => setTwitter(e.target.value)}/>
                </div>
                <div>
                    <span>Website:  </span>
                    <input className={'website'} value={website} placeholder={'Your website...'}
                    onChange={ (e) => setWebsite(e.target.value)}/>
                </div>
            </div>
            <BlueButton text={'Submit editing'} method={onEditSubmit} submitData={{ userId, lookingForAJob: Boolean(searchJob),
                lookingForAJobDescription: likedJob, fullName: name, aboutMe,
                github, instagram, facebook, website, twitter}}/>
        </div>
    );
};

export default EditProfileForm;
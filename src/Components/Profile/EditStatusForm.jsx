import React, {useState} from 'react';
import BlueButton from "../common/BlueButton";
import './EditForms.scss';

const EditStatusForm = ({updateStatus}) => {

    const [statusText, setStatusText] = useState('');

    return (
        <div className={'editing-status-form easy-form'} >
            <h2>Changing your status</h2>
            <input type={'text'} placeholder={'Enter new status'} value={statusText}
                   onChange={ (e) => setStatusText(e.target.value)}/>
            <BlueButton text={'Update profile'} method={updateStatus} submitData={statusText}/>
        </div>
    );
};

export default EditStatusForm;
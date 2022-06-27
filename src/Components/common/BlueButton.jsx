import React from 'react';

const BlueButton = ({method, text, submitData}) => {
    return (
        <>
            <button className={'blue-button'} onClick={ () => method(submitData)}>{text}</button>
        </>
    );
};

export default BlueButton;
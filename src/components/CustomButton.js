import React from 'react';

function CustomButton(props) {
    const buttonWrapperStyle = {
        display: 'flex',
        width: 497,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#59D571',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const buttonTitleStyle = {
        fontSize: '24px',
        textAlign: 'center',
        fontFamily: 'Stilu-semibold',
        color: '#FFFFFF',
        margin: 0,
    };
  return (
    <div onClick={props.onClick} style={{...buttonWrapperStyle, ...props.customStyle}}>
     <p style={{...buttonTitleStyle, ...props.customTitleStyle}}>{props.title}</p>
    </div>
  );
}

export default CustomButton;

import React from 'react';
import "./log.css";
import icon from "../../images/log.jpg"
const log = () => {
    return (
        <div className='log_cont'>
            <img className='img_icon' src={icon} alt="Wrong_Url"/>
            <h1 className='text' >SuccessFully Logged Out</h1>
        </div>
    );
};

export default log;
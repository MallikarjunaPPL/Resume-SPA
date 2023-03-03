import React from 'react';
import "./header.css";
import {Link} from "react-router-dom";
const header = () => {
    return (
        <div className='header_cont'>
            <Link to="/home"><h1 className='head_h1'>Home</h1></Link>
            <Link to="/profile"><h1 className='head_h1'>Profile</h1></Link>
            <Link to="/logout"><h1 className='head_h1'>Logout</h1></Link>  
        </div>
    );
};

export default header;
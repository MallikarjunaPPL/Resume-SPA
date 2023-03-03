import React from 'react';
import "./side.css";
import icon from "../../images/manager.png";
import logo from "../../images/icon.jpg";
const nav = () => {
    return (
        <div className='nav_cont'>
            <h1 className='nav_head'>Name:    P.Sai Mallikarjuna</h1>
        
            <img alt="Wrong_url" className="img_sty" src={icon}/>
          
            <div className='worker_cont'>
                <div className='co_work'>
                    
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Farzana Shaik</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Sreenath </p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Asif</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Veerash</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Sai</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Mallikarjuna</p>
                </div>
                
            </div>
        </div>
    );
};

export default nav;
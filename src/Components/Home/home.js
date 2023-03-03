import React from 'react';
import "./home.css";
import logo from "../../images/home.jpg"
const home = () => {
    return (
        
        <div className='home_cont'>
            <img alt="Wrong_Url" src={logo} className="image_sty" />
            <div className='para_cont'>
            <h1>Performance Goals</h1>
            <hr className='line'/>
            <p>
            Performance goals, also known as Key Performance Indicators (KPIs), are the goals you set to evaluate employee performance. They are commonly used in workforce management.

Specific performance goals depend on the employee’s job role, but they should always be connected to the overall business goals. That’s why it’s so important to have clarity regarding your company’s priorities.
Have one clear goal for your business and make it visible daily to everyone on your team.”

While it may not always be feasible to set just one goal, especially for large organizations, what matters here is clarity. Once you have that, it will be much easier to set performance goals for each job role, as you’ll know the overall business goals you want to achieve.
            </p>
        </div>
        </div>
       
    );
};

export default home;
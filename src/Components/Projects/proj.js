import React from 'react';
import "./proj.css";
import TaskList from "../TaskList/task"
const project = () => {
    return (
        <div className='proj_cont'>
            <div className='project'>
                <div className='head_cont'>
                <h1 className='head_h2'>
                    Project Name:- React SPA appilication
                </h1>
                <h1 className='head_h2'>
                    Project Program
                </h1>
               
                 <progress className="progress" value="90" id="file"  max="100"> 90% </progress>
                 <p className='head_h2'>A React component is a bit of code that represents a piece of the page. Each component is a JavaScript function that returns a piece of code that represents a piece of a web page.

              To build a page, we call these functions in a certain order, put together the result, and show it to the user.</p>

            </div>
            <TaskList/>
            </div>
        </div>
    );
};

export default project;
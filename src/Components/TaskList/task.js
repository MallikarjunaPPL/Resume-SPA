import React from 'react';
import './task.css';

const task = () => {
    return (
        <div className='task_cont'>
            <h1 className='task_head'>
                Tasks:-
            </h1>
            <div className='task_container'>
            <table className='tab'>
              <tr>
                 <th>Task Name:</th>
                   <th>Total Working Hours</th>
                   <th>Total Work Done</th>
                  </tr>
                  <tr>
                    <td>Resume Template</td>
                    <td><progress className="progress" value="90" id="file"  max="100"> 50% </progress></td>
                    <td>Task Completed</td>
                  </tr>
                  <tr>
                    <td>*********</td>
                    <td><progress className="progress" value="60" id="file"  max="100"> 50% </progress></td>
                    <td>*********</td>
                  </tr>
                  <tr>
                    <td>*********</td>
                    <td><progress className="progress" value="80" id="file"  max="100"> 50% </progress></td>
                    <td>*********</td>
                  </tr>
            </table>
            <h1 className='head_h2'>
                    Project Program:-
                </h1>
               
                 <progress className="progress" id="file" value="60"  max="100"> 50% </progress>
                 <div className='bottom_cont'>
                    <h1 className='head_task'>Report Work Done</h1>
                    <input type="text"/>
                    <button className='btn'>
                        Submit
                    </button>
                 </div>
            </div>

            <div className='task_container'>
            <table className='tab'>
              <tr>
                 <th>Task Name:</th>
                   <th>Total Working Hours</th>
                   <th>Total Work Done</th>
                  </tr>
                  <tr>
                    <td>JS functionalities</td>
                    <td><progress className="progress" value="100" id="file"  max="100"> 50% </progress></td>
                    <td>Task Completed</td>
                  </tr>
                  <tr>
                    <td>*********</td>
                    <td><progress className="progress" value="60" id="file"  max="100"> 50% </progress></td>
                    <td>*********</td>
                  </tr>
                  <tr>
                    <td>*********</td>
                    <td><progress className="progress" value="80" id="file"  max="100"> 50% </progress></td>
                    <td>*********</td>
                  </tr>
            </table>
            <h1 className='head_h2'>
                    Project Program:-
                </h1>
               
                 <progress className="progress" value="75"  id="file"  max="100"> 50% </progress>
                 <div className='bottom_cont'>
                    <h1 className='head_task'>Report Work Done</h1>
                    <input type="text" />
                    <button className='btn'>
                        Submit
                    </button>
                 </div>
            </div>

            <div className='task_container'>
            <table className='tab'>
              <tr>
                 <th>Task Name:</th>
                   <th>Total Working Hours</th>
                   <th>Total Work Done</th>
                  </tr>
                  <tr>
                    <td>React SPA</td>
                    <td><progress className="progress" value="100" id="file"  max="100"> 50% </progress></td>
                    <td>Task Completed</td>
                  </tr>
                  <tr>
                    <td>*********</td>
                    <td><progress className="progress" value="60" id="file"  max="100"> 50% </progress></td>
                    <td>*********</td>
                  </tr>
                  <tr>
                    <td>*********</td>
                    <td><progress className="progress" value="80" id="file"  max="100"> 50% </progress></td>
                    <td>*********</td>
                  </tr>
            </table>
            <h1 className='head_h2'>
                    Project Program:-
                </h1>
               
                 <progress className="progress" value="60" id="file"  max="100"> 50% </progress>
                 <div className='bottom_cont'>
                    <h1 className='head_task'>Report Work Done</h1>
                    <input type="text"/>
                    <button className='btn'>
                        Submit
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default task;
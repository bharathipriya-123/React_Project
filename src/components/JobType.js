import React from 'react';
import './JobType.css';
import { useState } from 'react';

export default function JobType() {
 
  return (
    <div className='jobform'>
        
            <lable for='usertype'><h3>JOB TYPE</h3></lable>
           
            <input type='checkbox' id='usertype' className='checkbox'/>FullTime
            <br></br>
            <input type='checkbox' id='usertype' className='checkbox'/>PartTime
            <br></br>
            <input type='checkbox' id='usertype' className='checkbox'/>Remote
            <br></br>
            <input type='checkbox' id='usertype' className='checkbox' />Internship
       
    </div>
  ) 
}





































{/* <label for="user_course"> COURSE APPLIED FOR:</label></td>
                <td><input type="checkbox" id="user_name" name="user_course_applied" value="BCA">BCA
                    <input type="checkbox" id="user_name" name="user_course_applied" value="B.com">B.com
                    <input type="checkbox" id="user_name" name="user_course_applied" value="B.sc">B.sc */}
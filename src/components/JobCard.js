
import React from "react";
import "./JobCard.css";
import { MoveRight } from 'lucide-react';

const JobCard = ({ logo, company,title,type,salary, timePosted,description }) => {
  return (
    <div className="job-card">
      
        <div className="job-card-header">
          <img src={logo}/>
           <div className="job-info">
             <h4>{company}</h4>
             <h3>{title}</h3>
             <div>
             <button className="view-job-button">View job</button>
             </div>
           </div>
               <div className="job-card1">
                  
                   <button className="job-details">{type}</button>
                   <button className="job-details1">{salary}</button>
                   <button className="job-details2">{timePosted}</button>
                   <p>{description}</p>
               </div>
      </div>
      
    </div>
   
    
  );
 
};

export default JobCard;

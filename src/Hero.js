import React from 'react'
import { Search } from 'lucide-react';
import './Hero.css'

export default function Hero() {
  return (
    <div className="job-board">
      
      <section className="company-logos">
        <div className="logos">
          <img src="microsoft.png" alt="Microsoft" />
          <img src="alliance.png" alt="Alliance" />
          <img src="bidlet.png" alt="Bidlet" />
          <img src="sopharma.png" alt="Sopharma" />
          <img src="dropbox.png" alt="Dropbox" />
          <img src="amazon.png" alt="Amazon" />
        </div>
      </section>

      <section className="job-listing">
        <div className="filters">
          <h3>Job Type</h3>
          <label>
            <input type="checkbox" /> Full Time
          </label>
          <label>
            <input type="checkbox" /> Part Time
          </label>
          <label>
            <input type="checkbox" /> Remote
          </label>
          <label>
            <input type="checkbox" /> Internship
          </label>
          <button className="clear-btn">Clear</button>
        </div>

        <div className="job-cards">
          <h2>Latest Jobs</h2>
          <p>2,640 Result Found</p>

          <div className="job-card">
            <h3>Microsoft</h3>
            <p>Need Senior MERN Stack Developer</p>
            <div className="job-info">
              <button>Full Time</button>
              <button>$5k - $7k</button>
              <button>12 hours ago</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            <button className="view-job-btn">View Job</button>
          </div>

          <div className="job-card">
            <h3>Microsoft</h3>
            <p>Need Senior MERN Stack Developer</p>
            <div className="job-info">
              <button>Full Time</button>
              <button>$5k - $7k</button>
              <button>12 hours ago</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            <button className="view-job-btn">View Job</button>
          </div>
         

          <div className="job-card">
            <h3>Microsoft</h3>
            <p>Need Senior MERN Stack Developer</p>
            <div className="job-info">
              <button>Full Time</button>
              <button>$5k - $7k</button>
              <button>12 hours ago</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            <button className="view-job-btn">View Job</button>
          </div>
         

          <div className="job-card">
            <h3>Microsoft</h3>
            <p>Need Senior MERN Stack Developer</p>
            <div className="job-info">
              <button>Full Time</button>
              <button>$5k - $7k</button>
              <button>12 hours ago</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            <button className="view-job-btn">View Job</button>
          </div>
         

          <div className="job-card">
            <h3>Microsoft</h3>
            <p>Need Senior MERN Stack Developer</p>
            <div className="job-info">
              <button>Full Time</button>
              <button>$5k - $7k</button>
              <button>12 hours ago</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            <button className="view-job-btn">View Job</button>
          </div>
         
          <div className="job-card">
            <h3>Microsoft</h3>
            <p>Need Senior MERN Stack Developer</p>
            <div className="job-info">
              <button>Full Time</button>
              <button>$5k - $7k</button>
              <button>12 hours ago</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            <button className="view-job-btn">View Job</button>
          </div>
         
          <div className="job-card">
            <h3>Microsoft</h3>
            <p>Need Senior MERN Stack Developer</p>
            <div className="job-info">
              <button>Full Time</button>
              <button>$5k - $7k</button>
              <button>12 hours ago</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            <button className="view-job-btn">View Job</button>
          </div>
         
         
        <button className='see-all-job'>See All Jobs</button>
          
        </div>
      </section>
    </div>
  )
}

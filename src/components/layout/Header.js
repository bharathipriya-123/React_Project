
import React from 'react';
import './Header.css';
import { PaintBucket } from 'lucide-react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header >
        <div className="header" >
       <div className="logo">
        <img src='https://jobboard-template.vercel.app/_next/image?url=%2FLogo.png&w=256&q=75' alt='logos'/>
        </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-links1" ><a href="#home">Home</a></li>
          <li className="nav-links1"><a href="#about">About</a></li>
          <li className="nav-links1"><a href="#find-job">Find Job</a></li>
          <li className="nav-links1"><a href="#subscribe">Subscribe</a></li>
        </ul>
      </nav>
      <div className="post-job-button">
      <PaintBucket/> <button className="btn1"> <a href="#post-job" >Post a Job</a></button>
      </div>  
      </div>

      <div className='titlebody'>
      <h1>Your ultimate job <br></br>
       search companion</h1>
      <h3>Are you looking for the perfect job or the ideal candidate?Find your dream job</h3 >
       <h3 className='h31'>with thousands of job posting across india</h3>
    </div>
    <div className='search'>
        <Search/>  
         <input  placeholder='   job title'></input><button className='searchBtn'>search</button>
     </div> 
   
    </header>
   
   
    
  );
};

export default Header;


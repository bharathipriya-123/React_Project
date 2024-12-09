import React from 'react';
import './JobList.css';

export default function JobList() {
  return (
    <div className='subscribe'>
        <div className='content1'>
            <h3 className='content-title'>Subscribe Newsletter</h3>
            <p className='content-title1'>Sign up to our newsletter to ger $10 off your first order, as </p>
            <p className='content-title2'>well as news of our latest offers and product releases.</p>
                <div className='input-btn'>
                    <input placeholder='email' className='input' /><button className='subscribe-btn'>Subscribe</button>
                </div>

        </div>

    </div>
  )
}
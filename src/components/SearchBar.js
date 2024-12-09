import React from 'react'
import { Search } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar() {
  return (
   
     <div className='search'>
        <Search/>   <input  placeholder='   job title'></input><button className='searchBtn'>search</button>
     </div> 
     
    
  )
}




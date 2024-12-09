// import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './Hero'
// import Jobcard from './components/JobCard'
// import SearchBar from './components/SearchBar'
import JobList from './components/JobList'
import { useState } from 'react'
// import JobType from './components/JobType'
// import Subscribe from './components/Subscribe'


export default function App() {
  
  return (
    <>
    <Header/>
    <main>
    <Hero/>
    {/* <JobCard/> */}
    <JobList/>

    </main>
    <Footer/>
    
   </>
  
  )
}

























// import React, { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import JobListing from "./components/JobListing";
// import "./App.css";

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const jobs = [
//     {
//       title: "Frontend Developer",
//       company: "Tech Corp",
//       location: "New York, NY",
//       salary: "$80,000 - $100,000",
//       description: "Build and maintain web interfaces.",
//     },
//     {
//       title: "Backend Developer",
//       company: "Data Systems",
//       location: "San Francisco, CA",
//       salary: "$90,000 - $120,000",
//       description: "Develop server-side logic.",
//     },
//     {
//       title: "Full Stack Developer",
//       company: "Innovatech",
//       location: "Remote",
//       salary: "$85,000 - $115,000",
//       description: "Work on both frontend and backend.",
//     },
//   ];

//   return (
//     <>
//     <Header/>
//     <Hero/>
//     <div className="app">
//       <h1>Job Listings</h1>
//       {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
//       <JobListing jobs={jobs} searchQuery={searchQuery} />
//     </div>
//     <Footer/>
//     </>
   
//   );
// };

// export default App;

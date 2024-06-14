import React from 'react';
 import Navbar from './Navbar';
 import './About.css';

 const About = () => {
  return (
    <>
     <div>
       <div className='navbar'>
         <Navbar />
         
       </div>
       <div>
         <h1 className='head'>About</h1>
       </div>
     </div>
   </>
  )
 }

 export default About
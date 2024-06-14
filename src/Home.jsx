import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
    return (
     <>
      <div>
        <div className='navbar'>
          <Navbar />
          
        </div>
        <div>
          <div className='bod'>
          <div>
            <h1>Corey Malloy</h1>
            <p>Web Developer</p>
            <button><a href=''>Contact Me</a></button>
          </div>
        </div>
        </div>
      </div>
    </>
   )
 }

 export default Home
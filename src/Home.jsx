import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
    return (
     <>
     <div className='container'>
      <div className='man'>
          <Navbar />
          
      </div>
      <div>
        <h1 className='head'>Home</h1>
      </div>
      </div>
    </>
   )
 }

 export default Home
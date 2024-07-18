import { Link } from "react-router-dom";
import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
     <>
      <div>
        <div>
          <div className='bod'>
          <div>
            <h1>Corey Malloy</h1>
            <p>Web Developer | Software Developer</p>
            <div className='buts'>
              <button><Link to="/about">Learn More</Link></button>
              <button><Link to="/contact">Contact Me</Link></button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
   )
 }

 export default Home
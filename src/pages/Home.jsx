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
              <button><Link to="/about" style={{ textDecoration: 'none', color: 'rgb(53, 52, 52)' }}><b>Learn More</b></Link></button>
              <button><Link to="/contact" style={{ textDecoration: 'none', color: '#E9F1FA' }}><b>Contact Me</b></Link></button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
   )
 }

 export default Home
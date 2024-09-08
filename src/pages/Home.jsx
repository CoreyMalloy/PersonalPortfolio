import { Link } from "react-router-dom";
import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
      <div className='home-container'>
        <div className="home-wrapper">
          <div classname ='home-content'>
            <h1 className="home-content-title">Hi! I am <span>Corey Malloy</span>.</h1>
            <p className="home-content-description">A software engineer that likes to learn.</p>
          </div>
          <div className='home-content-buttons'>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#E9F1FA' }}>
              <button className="home-button-contact">
                Talk with me
              </button>
            </Link>
            
            <Link to="/about" style={{ textDecoration: 'none', color: 'rgb(53, 52, 52)' }}>
              <button className="home-button-about">
                Learn More
              </button>
            </Link>

            
          </div>
        </div>
      </div>
   )
 }

 export default Home
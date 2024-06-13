import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='container'>
        <div className='topbar'>
          <div className='Navbar'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className='bod'>
          <div>
            <h1>Corey Malloy</h1>
            <p>Web Developer</p>
            <button><a href=''>Contact Me</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
import React from 'react';
import './styles/Projects.css';
import trading from './images/tradingbot.jpg';

 const Projects = () => {
  return (
    <>
     <div className='intro'>
      <div>
        <h1 className='head'>Projects</h1>
      </div>
    </div>
       <div className='proj-list'>
          <ul>
            <li className="proj">
              <button><a href='https://github.com/CoreyMalloy/tradingBot'><img className='trading' src={trading}/></a></button>
              <h2>AI-Trading Bot</h2>
            </li>
            <li className="proj">
              Discord Bot
            </li>
          </ul>
          <ul>
            <li className="proj">
              Django CRUD application
            </li>
            <li className="proj">
              
            </li>
          </ul>
       </div>
     
   </>
  )
 }

 export default Projects
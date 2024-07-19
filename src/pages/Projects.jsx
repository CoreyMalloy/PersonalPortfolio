import React from 'react';
import './styles/Projects.css';
import trading from './images/tradingbot.jpg';
import crud from './images/CRUD.jpeg';
import discord from './images/discord.jpg';


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
              <button><a href='https://github.com/CoreyMalloy/Bot'><img className='discord' src={discord}/></a></button>
              <h2>Discord Bot</h2>
            </li>
          </ul>
          <ul>
            <li className="proj">
            <button><a href='https://github.com/CoreyMalloy/CRUD'><img className='crud' src={crud}/></a></button>
              <h2>Django CRUD application</h2>
            </li>
            <li className="proj">
              
            </li>
          </ul>
       </div>
     
   </>
  )
 }

 export default Projects
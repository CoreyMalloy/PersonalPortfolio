import React from 'react';
import './styles/Projects.css';
import trading from './images/tradingbot.jpg';
import crud from './images/CRUD.jpeg';
import discord from './images/discord.jpg';


 const Projects = () => {
  return (
    <>
     <div className='projects-title'>
      <div>
          <h1 className='project-head'>Projects</h1>
      </div>
    </div>
    <div className='proj-list'>
      <li className="proj">
        <button><a href='https://github.com/CoreyMalloy/tradingBot'><img className='trading' src={trading}/></a></button>
        <h2>AI-Trading Bot</h2>
      </li>
      <li className="proj">
        <button><a href='https://github.com/CoreyMalloy/Bot'><img className='discord' src={discord}/></a></button>
        <h2>Discord Bot</h2>
      </li>
      <li className="proj">
        <button><a href='https://github.com/CoreyMalloy/CRUD2'><img className='crud' src={crud}/></a></button>
        <h2>React/Python CRUD application</h2>
        </li>
    </div>
   </>
  )
 }

 export default Projects
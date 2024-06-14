import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
     <>
      <div>
         <Navbar />
         <h1>Home</h1>
      </div>
      <div className='bod'>
        <div>
          <h1>Corey Malloy</h1>
          <p>Web Developer</p>
          <button><a href=''>Contact Me</a></button>
        </div>
      </div>
    </>
   )
 }

 export default Home
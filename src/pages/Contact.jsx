import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  
  const click = () => {
    alert(val)
  }
   
  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Contact Me</h1>
        </div>
        <div>
          <label htmlFor="name"></label>
          <input className='name' type='text' name='name' id='name' placeholder='Name'></input>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input className='email' type='email' name='email' id='email' placeholder='Email'></input>
        </div>
        <div>
          <label htmlFor="message"></label>
          <input className='message' type='text' name='message' id='message' rows='5' placeholder='Message'></input>
        </div>
        <button onClick={click}>Submit</button>
      </div> 
    </>
  )
}

export default Contact
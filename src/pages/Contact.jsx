import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  let name = "corey";
  let message ="connor";
  
  const click = () => {
    name = document.getElementById("name").value
    message = document.getElementById("message").value
    // alert(name.value + message.value)
  }
   
  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Contact Me</h1>
        </div>
        <div className='name'>
          <label htmlFor="name"></label>
          <input className='name-box' type='text' name='name' id='name' placeholder='Name'></input>
        </div>
        <div className='message'>
          <label htmlFor="message"></label>
          <textarea className='message-box' type='text' name='message' id='message'placeholder='Message'></textarea>
        </div>
        <div className='submit'>
          <a href={`mailto:Corey_8381@outlook.com?subject=Hi Corey&body=${message} - ${name}!`}>Submit</a>
        </div>
      </div> 
    </>
  )
}

export default Contact
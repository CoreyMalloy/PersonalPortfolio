import React, { useState } from 'react';
import './styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  let name = "corey";
  let message ="connor";
  
  // const click = () => {
  //   name = document.getElementById("name").value
  //   message = document.getElementById("message").value
  //   // alert(name.value + message.value)
  // }

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_tu2qzbr', 'template_id', e.target, 'public_key');
  // }
   
  return (
    <>
      <div className='contact-container'>
        <div>
          <h1 className='contact-header'>Contact <span>Me</span></h1>
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
          <a href={`mailto:Corey_8381@outlook.com?subject=Website Message &body=${message} - ${name}!`}>Submit</a>
        </div>
      </div> 
    </>
  )
}

export default Contact
import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  const [val, setVal] = useState("Hello There")
  const click = () => {
    alert(val)
  }

  const change = event => {
    setVal(event.target.value)
  }

  return (
    <>
      <div>
        <h1 className='head'>Contact</h1>
        <input onChange={change}
        value = {val}/>
        <button onClick = {click}>Click Me</button>
      </div>
    </>
  )
}

export default Contact
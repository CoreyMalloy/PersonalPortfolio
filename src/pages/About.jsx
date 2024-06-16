import React from 'react';
import './styles/About.css';

 const About = () => {
  return (
    <>
     <div>
       <div className='intro'>
          <h1 className='head'>About Me</h1>
          <h1>Picture Here</h1>
       </div>
       <div className='bio'>
        I am an aspiring web developer and recent graduate from Cleveland State University with a degree in Computer science and a minor in Mathematics.
        I have previous professional experience in web development using technologies such as Angular, NestJS, and Firebase.
        During this internship I was able to work on both the front end, where we helped modernize a current deployment, and the back end, where we worked to optimize load speeds and database queries.
        While my professional experience is focused towards web development, my academic journey equipped me with a multitude of skills within software development.
        Recently I have been trying to expand my horizon by developing CRUD applications using python and SQL.
       </div>

       <div className='exp'>
        <div>Font-End</div>
        <div>Back-End</div>
       </div>
     </div>
   </>
  )
 }

 export default About
import React from 'react';
import './styles/About.css';
import logoimg from './images/bootstrap.png';
import logoimg2 from './images/html2.png';
import logoimg3 from './images/css.png';
import logoimg4 from './images/sass.png';
import logoimg5 from './images/react.png';
import logoimg6 from './images/wordpress.png';

import logoimg7 from './images/nestjs.png';
import logoimg8 from './images/firebase.png';
import logoimg9 from './images/django.png';
import logoimg10 from './images/sql.png';
import logoimg11 from './images/postman.png';

import logoimg12 from './images/java.png';
import logoimg13 from './images/python.png';
import logoimg14 from './images/C.png';
import logoimg15 from './images/c++.png';



 const About = () => {
  return (
    <>
     <div>
       <div className='intro'>
          <h1 className='head'>About Me</h1>
       </div>
       <div className='bio'>
        I am an aspiring web developer and recent graduate from Cleveland State University with a degree in Computer science and a minor in Mathematics.
        I have previous professional experience in web development using technologies such as Angular, NestJS, and Firebase.
        During this internship I was able to work on both the front end, where we helped modernize a current deployment, and the back end, where we worked to optimize load speeds and database queries.
        While my professional experience is focused towards web development, my academic journey equipped me with a multitude of skills within software development.
        Recently I have been trying to expand my horizon by developing CRUD applications using python and SQL.
       </div>

       <div className='exp'>
        <div className='left'>
          <div className='title-left'>Languages</div>
          <div className='card-left'>
            <ul>
              <li className="skill-icon">
                <img className='html' src={logoimg2}/>
              </li>
              <li className="skill-icon">
                <img className='html' src={logoimg}/>
              </li>
              <li className="skill-icon">
                <img className='html' src={logoimg}/>
              </li>
            </ul>
            <ul>
              <li className="skill-icon">
                <img className='html' src={logoimg3}/>
              </li>
              <li className="skill-icon">
                <img className='html' src={logoimg4}/>
              </li>
            </ul>
            <ul>
              <li className="skill-icon">
                <img className='html' src={logoimg5}/>
              </li>
              <li className="skill-icon">
              <img className='html' src={logoimg6}/>
              </li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <div className='title-right'>Services</div>
          <div className='card-right'>
          <ul>
              <li className="skill-icon">
                <img className='html' src={logoimg7}/>
              </li>
              <li className="skill-icon">
                <img className='html' src={logoimg8}/>
              </li>
            </ul>
            <ul>
              <li className="skill-icon">
                <img className='html' src={logoimg11}/>
              </li>
              <li className="skill-icon">
                <img className='html' src={logoimg10}/>
              </li>
            </ul>
            <ul>
              <li className="skill-icon">
                <img className='html' src={logoimg9}/>
              </li>
              <li className="skill-icon">
              </li>
            </ul>
          </div>
          
        </div>
        
       </div>
       <div className='cont'>
        <div className='lang'>
              <div className='title'>Libraries/Frameworks</div>
              <div className='list'>
              <ul>
                <li className="skill-icon">
                  <img className='html' src={logoimg12}/>
                </li>
                <li className="skill-icon">
                  <img className='html' src={logoimg13}/>
                </li>
              </ul>
              <ul>
                <li className="skill-icon">
                  <img className='html' src={logoimg14}/>
                </li>
                <li className="skill-icon">
                  <img className='html' src={logoimg15}/>
                </li>
              </ul>
              </div>
            </div>
        </div>
     </div>
   </>
  )
 }

 export default About
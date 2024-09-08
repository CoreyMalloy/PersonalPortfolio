import React from 'react';
import './styles/About.css';
import logoimg from './images/javs.png';
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
import logoimg16 from './images/bootstrap.png';
import logoimg17 from './images/tail.png';

 const About = () => {
  return (
    <>
     <div>
      <h6 className='head'>About Me</h6>
      <div className='bio'>
        <div className='bio-description'>
          I am an aspiring web developer with a degree in Computer science and a minor in Mathematics from Cleveland State University.
          I have previous professional experience in web development using technologies such as Angular, NestJS, and Firebase.
          My academic journey equipped me with a multitude of skills within software development and not just web development.
          Recently I have been trying to expand my horizon into other aspects of development.
        </div>
      </div>
      <div className='third-section-wrapper'>
          <div className='skills'>Skills</div>
          <div className='exp'>
          
            <div className='left'>
              <div className='title-left'>Languages</div>
              <div className='card-left'>
                <ul>
                  <li className="skill-icon">
                    <img className='html' src={logoimg2}/>
                  </li>
                  <li className="skill-icon">
                    <img className='html' src={logoimg13}/>
                  </li>
                  <li className="skill-icon">
                    <img className='html' src={logoimg15}/>
                  </li>
                </ul>
                <ul>
                  <li className="skill-icon">
                    <img className='html' src={logoimg3}/>
                  </li>
                  <li className="skill-icon">
                    <img className='html' src={logoimg12}/>
                  </li>
                </ul>
                <ul>
                  <li className="skill-icon">
                    <img className='html' src={logoimg}/>
                  </li>
                  <li className="skill-icon">
                  <img className='html' src={logoimg14}/>
                  </li>
                </ul>
              </div>
            </div>
            <div className='right'>
              <div className='title-right'>Services</div>
              <div className='card-right'>
              <ul>
                  <li className="skill-icon">
                    <img className='html' src={logoimg6}/>
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
                        <img className='html' src={logoimg4}/>
                      </li>
                      <li className="skill-icon">
                        <img className='html' src={logoimg5}/>
                      </li>
                    </ul>
                    <ul>
                      <li className="skill-icon">
                        <img className='html' src={logoimg7}/>
                      </li>
                      <li className="skill-icon">
                        <img className='html' src={logoimg16}/>
                      </li>
                    </ul>
                    <ul>
                      <li className="skill-icon">
                        <img className='html' src={logoimg17}/>
                      </li>
                      <li className="skill-icon">
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
     </div>
   </>
  )
 }

 export default About
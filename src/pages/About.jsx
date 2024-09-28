import React from 'react';
// import services from './components/Services.jsx';
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
      <div className='about-header-container'>
        <div className='about-header-wrapper'>
          <div className='about-header-content'>
            <h1 className='about-header-content-title'>About <span>Me</span></h1>
            <p className='about-header-content-description'>
              I graduated with a degree in Computer Science and a Mathematics minor from Cleveland State University.
              Recently I have been expanding my horizon into other aspects of development.
            </p>
          </div>
        </div>
      </div>
      <div className='third-section-wrapper'>
          <div className='skills'>Skills</div>
          <div className='exp'>
          {/* <Services /> */}
            <div className='left-skills-list'>
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
            <div className='middle-skills-list'>
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
            <div className='right-skills-list'>
              <div className='title'>Tools</div>
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
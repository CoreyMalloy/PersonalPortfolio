import React from 'react';
import Cards from './Services.jsx';
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

const data = [
  {
    subheading: "Skills",
    service:[
      {
          icon: logoimg2, 
          icon1: logoimg13,
          icon2: logoimg15,
          icon3: logoimg3,
          icon4: logoimg12,
          icon5: logoimg,
          icon6: logoimg14,
          title: "Languages",
      },
      {
          icon: logoimg6, 
          icon1: logoimg8,
          icon3: logoimg11,
          icon4: logoimg10,
          icon5: logoimg9,
          title: "Services",
      },
      {
          icon: logoimg4, 
          icon1: logoimg5,
          icon3: logoimg7,
          icon4: logoimg16,
          icon5: logoimg17,
          title: "Tools",
      }
    ]
  }
]

const About = () => {
  return (
    <>
     <div>
      <div className='about-header-container' style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '70vh', paddingBottom:'18vh'}}>
        <div className='about-header-wrapper' style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: '5rem', marginRight: 'auto', padding: '4rem'}}>
          <div className='about-header-content'style={{display:'flex',flexDirection: 'column', marginLeft: '5rem'}}>
            <h1 className='about-header-content-title' style={{fontSize: '4rem', fontWeight: '500'}}>About <span style={{color: '#00ABE4'}}>Me</span></h1>
            <p className='about-header-content-description' style={{fontSize: '3rem', fontWeight: '300', width: '90%'}}>
              I graduated with a degree in Computer Science and a Mathematics minor from Cleveland State University.
              Recently I have been expanding my horizon into other aspects of development.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Cards services={data} />
      </div>
      {/* <div className='third-section-wrapper'>
          <div className='skills'>Skills</div>
          <div className='exp'>
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
        </div> */}
     </div>
   </>
  )
 }

 export default About
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
          title: "Languages",
          icon: logoimg2,
          description: "I use this langauge along side CSS and JavaScript in the development of my portfolio, and also continue to learn a lot with different projects.",
          icon1: logoimg13,
          description1: "I use this in many projects and is my most used language. Recently I have used it for different CRUD applications.",
          icon2: logoimg15,
          description2: "I used this language in school for different projects. I also looked into it for game dev.",
          icon3: logoimg3,
          description3: "I use this langauge along side HTML and JavaScript in the development of my portfolio, and also continue to learn a lot with different projects.",
          icon4: logoimg12,
          description4: "I use this primarily when I practice leetcode problems, which is on a regular basis.",
          icon5: logoimg,
          description5: "I use this langauge along side HTML and CSS for the building of my portfolio and continue with different projects.",
          icon6: logoimg14,
          description6: "I used this primarily in school, I also use this when practicing leetcode problems.",
          
      },
      {
          title: "Services",
          icon: logoimg6,
          description: "I used this during my internship, The client wanted it switched from angular so that it was easier for them to maintain.",
          icon1: logoimg8,
          description1: "I used this during my web development internship, This was used for the back-end to our search engine.",
          icon3: logoimg11,
          description3: "I used this during my web development internship to troubleshoot any problems that occured.",
          icon4: logoimg10,
          description4: "I used this when working through a database while trying to optimize a match and merge algorithm for creating accounts",
          icon5: logoimg9,
          description5: "I used this during the building of a front-end to a match and merge algorithm for the creation of accounts",
          
      },
      {   
          title: "Tools",
          icon: logoimg4,
          description: "I used this during the creation of my portfolio along with tailwind and bootstrap",
          icon1: logoimg5,
          description1: "I use this as the main component during the creation of my portfolio, I continue to grow my experience while working on specific projects",
          icon3: logoimg7,
          description3: "I used this during my internship. This was used in tandem with firebase for the backend of the search engine",
          icon4: logoimg16,
          description4: "I used this for inspiration and design on my portfolio and other different projects that I have been working on",
          icon5: logoimg17,
          description5: "I used this along with CSS in the creation of my portfolio, I alternated for whenever I was able to use it.",
          
      }
    ]
  }
]

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
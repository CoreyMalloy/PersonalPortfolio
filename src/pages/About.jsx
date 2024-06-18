import React from 'react';
import './styles/About.css';
import LogoImg from './images/html2.jpg';
import LogoImg2 from './images/html.png';

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
          <div className='title-left'>Font-End</div>
          <div className='card-left'>
            <ul>
              <li className="skill-icon">
                <img src={LogoImg}/>
                {/* <img src=".\images\html.png" alt='htmlpic' class="skill-icon"/> */}
              </li>
              <li className="skill-icon">
                card1
              </li>
            </ul>
            <ul>
              <li className="skill-icon">
                card1
              </li>
              <li className="skill-icon">
                card1
              </li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <div className='title-right'>Back-End</div>
          <div className='card-right'>
            <ul>
                <li className="skill-icon">
                  card1
                </li>
                <li className="skill-icon">
                  card1
                </li>
              </ul>
              <ul>
                <li className="skill-icon">
                  card1
                </li>
                <li className="skill-icon">
                  <img src={LogoImg2}/>
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
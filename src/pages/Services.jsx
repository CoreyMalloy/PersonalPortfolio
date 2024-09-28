import React from "react";
import './styles/Services.css';

const Cards = ({ services }) => {
  const { subheading, service } = services[0];
  return (
    <div className = "skills-container" style={{display:'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#00ABE4'}}>
      <h2 className = "skills-container-title" style={{display: 'flex', justifyContent: 'center', fontSize: '5rem', fontWeight: '400', color: '#E9F1FA', width: '100%'}}>{subheading}</h2>
      <div className = "skills-container-total-cards" style={{display:'flex', justifyContent: 'space-evenly'}}>
        {service.map((item) => (
          <div className = "skills-container-individual-cards" style={{ margin: 'auto', display: 'flex', flexDirection:'column',
            justifyContent: 'space-evenly', alignItems: 'center',
            width: '30%', height: '60vh',
            backgroundColor: '#E9F1FA', borderRadius: '5rem'
          }}>
            <h3 className="individual-card-titles" style={{fontSize: '3rem', fontWeight: '200', borderBottom: '2px solid #00ABE4'}}>{item.title}</h3>
            <div className="skills-icon-list-top" style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'}}>
              {item.icon ? (<img src={item.icon} alt={`${item.title} icon`} style={{ width: 'auto', height: '5rem' }} />) : null}
              {item.icon1 ? (<img src={item.icon1} alt={`${item.title} icon1`} style={{ width: 'auto', height: '5rem' }} />) : null}
              {item.icon2 ? (<img src={item.icon2} alt={`${item.title} icon2`} style={{ width: 'auto', height: '5rem' }} />) : null}
            </div>
            <div className="skills-icon-list-bottom" style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'}}>
              {item.icon3 ? (<img src={item.icon3} alt={`${item.title} icon3`} style={{ width: 'auto', height: '5rem' }} />) : null}
              {item.icon4 ? (<img src={item.icon4} alt={`${item.title} icon4`} style={{ width: 'auto', height: '5rem' }} />) : null}
              {item.icon5 ? (<img src={item.icon5} alt={`${item.title} icon5`} style={{ width: 'auto', height: '5rem' }} />) : null}
              {item.icon6 ? (<img src={item.icon6} alt={`${item.title} icon6`} style={{ width: 'auto', height: '5rem' }} />) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards
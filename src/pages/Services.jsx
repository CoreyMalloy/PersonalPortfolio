import React from "react";
import './styles/Services.css';

const Cards = ({ services }) => {
  const { subheading, service } = services[0]; // Destructure from data[0]
  return (
    <div style={{display:'flex', flexDirection: 'column', height: '93vh', backgroundColor: '#00ABE4'}}>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>{subheading}</h2>
      <div style={{display:'flex', justifyContent: 'space-evenly'}}>
        {service.map((item) => (
          <div style={{ marginBottom: '20px', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', border: '2px solid red'}}>
            <h3>{item.title}</h3>
            <div>
              <img src={item.icon} alt={`${item.title} icon`} style={{ width: '50px', height: '50px' }} />
              <img src={item.icon1} alt={`${item.title} icon1`} style={{ width: '50px', height: '50px' }} />
              <img src={item.icon2} alt={`${item.title} icon2`} style={{ width: '50px', height: '50px' }} />
            </div>
            <div>
              <img src={item.icon3} alt={`${item.title} icon3`} style={{ width: '50px', height: '50px' }} />
              <img src={item.icon4} alt={`${item.title} icon4`} style={{ width: '50px', height: '50px' }} />
              <img src={item.icon5} alt={`${item.title} icon5`} style={{ width: '50px', height: '50px' }} />
              <img src={item.icon6} alt={`${item.title} icon6`} style={{ width: '50px', height: '50px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards
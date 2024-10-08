import React from "react";
import './styles/Services.css';

const Cards = ({ services }) => {
  const { subheading, service } = services[0];
  return (
    <div className = "skills-container">
      <h2 className = "skills-container-title">{subheading}</h2>
      <div className = "skills-container-total-cards">
        {service.map((item) => (
          <div className = "skills-container-individual-cards">
            <h3 className="individual-card-titles">{item.title}</h3>
            <div className="skills-icon-list-top">
              {item.icon ? (<img src={item.icon} alt={`${item.title} icon`}/>) : null}
              {item.description ? (<text className="firstText">{item.description}</text>) : null}
              {item.icon1 ? (<img src={item.icon1} alt={`${item.title} icon1`}/>) : null}
              {item.description1 ? (<text className="firstText">{item.description1}</text>) : null}
              {item.icon2 ? (<img src={item.icon2} alt={`${item.title} icon2`}/>) : null}
              {item.description2 ? (<text className="firstText">{item.description2}</text>) : null}
            </div>
            <div className="skills-icon-list-bottom">
              {item.icon3 ? (<img src={item.icon3} alt={`${item.title} icon3`}/>) : null}
              {item.description3 ? (<text className="firstText">{item.description3}</text>) : null}
              {item.icon4 ? (<img src={item.icon4} alt={`${item.title} icon4`}/>) : null}
              {item.description4 ? (<text className="firstText">{item.description4}</text>) : null}
              {item.icon5 ? (<img src={item.icon5} alt={`${item.title} icon5`}/>) : null}
              {item.description5 ? (<text className="firstText">{item.description5}</text>) : null}
              {item.icon6 ? (<img src={item.icon6} alt={`${item.title} icon6`}/>) : null}
              {item.description6 ? (<text className="firstText">{item.description6}</text>) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards
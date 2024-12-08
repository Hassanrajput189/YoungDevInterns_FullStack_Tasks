import React from 'react';

interface cardProps {
  title: string;
  titleColor: string; // Color for the title
  image: string;
  desc?: string;
  links: string[];
}

const Card: React.FC<cardProps> = (props) => {
  return (
    <div className="card">
      {/* Apply inline style for dynamic title color */}
      <div className="title" style={{ background: props.titleColor }}>
        {props.title}
      </div>
      <div className="image">
        <img src={props.image} alt="img" />
      </div>
      <div className="desc">{props.desc}</div>
      <div className="links">
        <ul>
          {props.links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;

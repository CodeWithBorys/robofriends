import React from 'react';
import './card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className="roboCard">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        alt={`Robot ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

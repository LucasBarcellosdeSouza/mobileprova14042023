import React from 'react';

const Item = ({ image, name, description, onTrade }) => {
  return (
    <div>
      <img src={image} alt={name} style={{ width: '100px' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={onTrade}>Troca</button>
    </div>
  );
};

export default Item;

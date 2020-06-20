/* eslint-disable import/extensions */
import React from 'react';
import ImageContainer from './ImageContainer.jsx';
import Label from './Label.jsx';

const Card = (props) => {
  return (
    <div>
      <h2>Card</h2>
      <div className="card">
        <ImageContainer />
        <Label />
      </div>
    </div>
  );
};

export default Card;

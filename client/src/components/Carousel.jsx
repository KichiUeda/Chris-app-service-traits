/* eslint-disable import/extensions */
import React from 'react';
import Card from './Card.jsx';

const Carousel = (props) => {
  return (
    <div>
      <h1 id="carousel">Carousel Mock Up</h1>
      <div className="carousel">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

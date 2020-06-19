/* eslint-disable import/extensions */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const ImageContainer = (props) => {
  return (
    <div className="image-container">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
};

export default ImageContainer;

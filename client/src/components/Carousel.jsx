/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const CardWrapper = styled.div`
  display: block;
`;
const CardContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10vh;
`;

const Carousel = (props) => {
  console.log('Carousel ', props);
  return (
    <CardWrapper>
      {/* <h1 id="carousel">Carousel Mock Up</h1> */}
      <CardContainer>
        <Card thumbs={props.thumbsTraits[0]} />
        <Card thumbs={props.thumbsTraits[1]} />
        <Card thumbs={props.thumbsTraits[2]} />
        <Card thumbs={props.thumbsTraits[3]} />
      </CardContainer>
    </CardWrapper>
  );
};

export default Carousel;

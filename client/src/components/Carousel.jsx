/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const CardWrapper = styled.div`
  display: block;
  width: 100vw;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-bottom: 10vh;
`;

const Carousel = (props) => {
  return (
    <CardWrapper>
      {/* <h1 id="carousel">Carousel Mock Up</h1> */}
      <CardContainer>
        <Card />

        <Card />

        <Card />

        <Card />
      </CardContainer>
    </CardWrapper>
  );
};

export default Carousel;

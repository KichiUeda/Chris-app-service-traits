/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer.jsx';
import Label from './Label.jsx';

const CardWrapper = styled.div`
  text-align: center;
`;

const CardContainer = styled.div`
  background-color: #fff;
  color: #a1a7b2;
  height: 221px;
  width: 270px;
`;

const Card = (props) => {
  return (
    <CardWrapper>
      <h2>Card</h2>
      <CardContainer>
        <ImageContainer />
        <Label />
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;

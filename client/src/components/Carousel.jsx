/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 257px;
`;
const CardContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10vh;
`;
const HeaderStyled = styled.p`
  padding-left: 8vw;
`;

const Carousel = (props) => {
  console.log('Carousel ', props);
  return (
    <CardWrapper>
      <HeaderStyled>TRAITS</HeaderStyled>
      <CardContainer>
        <Card thumbsNlabel={props.traitThumbs[0]} />
        <Card thumbsNlabel={props.traitThumbs[1]} />
        <Card thumbsNlabel={props.traitThumbs[2]} />
        <Card thumbsNlabel={props.traitThumbs[3]} />
      </CardContainer>
    </CardWrapper>
  );
};

export default Carousel;

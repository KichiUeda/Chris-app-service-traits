/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer.jsx';
import Label from './Label.jsx';

const CardWrapper = styled.div`
  text-align: center;
  margin: 0 20px 0 0;
`;

const CardContainer = styled.div`
  background-color: #fff;
  color: #a1a7b2;
  height: 221px;
  width: 270px;
`;

const Card = (props) => {
  console.log('card ', props);
  const newThumbArray = props.thumbsNlabel.slice();
  return (
    <CardWrapper>
      <CardContainer>
        <ImageContainer thumbnails={props.thumbsNlabel} />
        <Label trait={newThumbArray.pop()} />
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;

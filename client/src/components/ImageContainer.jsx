/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail.jsx';

const ContainerStyled = styled.div`
  background-color: lightskyblue;
  height: 168px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
`;

const ImageContainer = (props) => {
  return (
    <ContainerStyled>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </ContainerStyled>
  );
};

export default ImageContainer;

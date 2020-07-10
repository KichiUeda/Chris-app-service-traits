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
  // console.log(props.thumbs);
  return (
    <ContainerStyled>
      <Thumbnail thumb={props.thumbnails[0]} />
      <Thumbnail thumb={props.thumbnails[1]} />
      <Thumbnail thumb={props.thumbnails[2]} />
      <Thumbnail thumb={props.thumbnails[3]} />
    </ContainerStyled>
  );
};

export default ImageContainer;

/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail.jsx';

const ContainerStyled = styled.div`
  background-color: #a1a7b2;
  height: 168px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
`;

const ImageContainer = (props) => {
  return (
    <ContainerStyled>
      <Thumbnail thumb={props.thumbnails[0].thumbnail} id={props.thumbnails[0].product_id} />
      <Thumbnail thumb={props.thumbnails[1].thumbnail} id={props.thumbnails[1].product_id} />
      <Thumbnail thumb={props.thumbnails[2].thumbnail} id={props.thumbnails[2].product_id} />
      <Thumbnail thumb={props.thumbnails[3].thumbnail} id={props.thumbnails[3].product_id} />
    </ContainerStyled>
  );
};

export default ImageContainer;

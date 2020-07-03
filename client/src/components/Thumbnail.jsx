import React from 'react';
import styled from 'styled-components';

const ThumbnailStyled = styled.div`
  background-color: lightgreen;
  margin: 5px auto;
  width: 135px;
  margin: 0;
  filter: grayscale(80%);
  transition: 2s all;
  &:hover {
    filter: grayscale(0%);
  }
`;

const Thumbnail = (props) => {
  return (
    <ThumbnailStyled>
      <h3>image</h3>
    </ThumbnailStyled>
  );
};

export default Thumbnail;

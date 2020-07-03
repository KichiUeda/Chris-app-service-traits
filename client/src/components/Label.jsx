import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.div`
  height: 53px;
  padding: 10px;
`;

const TraitStyled = styled.h2`
  margin: 0;
`;

const Label = (props) => {
  return (
    <LabelStyled>
      <TraitStyled>Trait Label</TraitStyled>
    </LabelStyled>
  );
};

export default Label;

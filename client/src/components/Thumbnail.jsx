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

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('productId ', this.state.product_id);
  }

  render() {
    return (
      <ThumbnailStyled onClick={this.handleClick}>
        <h3>image</h3>
        <img src={this.props.thumbnail} alt="game image"></img>
      </ThumbnailStyled>
    );
  }
}

export default Thumbnail;

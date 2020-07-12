import React from 'react';
import styled from 'styled-components';

const ThumbnailStyled = styled.div`
  background-color: lightgreen;
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  margin: 5px auto;
  width: 135px;
  margin: 0;
  filter: grayscale(90%);
  transition: 0.4s all ease-in;
  &:hover {
    filter: grayscale(0%);
  }
`;

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    window.location.pathname = `/${this.props.id}/`;
  }

  render() {
    return <ThumbnailStyled onClick={this.handleClick} image={this.props.thumb} />;
  }
}

export default Thumbnail;

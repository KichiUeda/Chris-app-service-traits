/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import GlobalStyle from '../GlobalStyle.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 1,
      product_data: {}
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {/* <h1>This will be Traits service hello</h1> */}
        <GlobalStyle />
        <Carousel />
      </div>
    );
  }
}

export default App;

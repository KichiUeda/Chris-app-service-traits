/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
// import GlobalStyle from '../GlobalStyle.js';

const AppWrapper = styled.div`
  width: 100%;
  height: 339px;
  background-color: #282c34;
`;
const AppStyled = styled.div`
  height: 269px;
  color: #a1a7b2;
`;

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
      <AppWrapper>
        <AppStyled>
          {/* <h1>This will be Traits service hello</h1> */}
          {/* <GlobalStyle /> */}
          <Carousel />
        </AppStyled>
      </AppWrapper>
    );
  }
}

export default App;

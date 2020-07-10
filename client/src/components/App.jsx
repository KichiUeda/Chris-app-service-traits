/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
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
      product_id: window.location.pathname,
      product_data: [
        {
          trait: 'upward-trending',
          products: [17, 23, 33, 66, 70, 72, 89, 99]
        },
        { trait: 'homogeneous', products: [4, 19, 33, 41, 66, 81] },
        { trait: 'demand-driven', products: [25, 28, 33, 44] },
        {
          trait: 'tangible',
          products: [19, 33, 45, 71, 74, 81, 86, 96, 100]
        },
        {
          trait: 'full-range',
          products: [18, 23, 27, 33, 52, 53, 58, 73, 79]
        },
        { trait: 'foreground', products: [29, 32, 33, 43, 56] }
      ]
    };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(id) {
    // eslint-disable-next-line react/destructuring-assignment
    const requestURL = `http://127.0.0.1:3005/traits${id}`;
    // eslint-disable-next-line no-undef
    console.log(requestURL);
    fetch(requestURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ product_data: data });
      })
      .catch((err) => {
        throw err;
      });
  }

  componentDidMount() {
    const id = this.state.product_id.slice(0, -1);
    this.fetchImages(id);
  }

  render() {
    return (
      <div>
        {/* <h1>This will be Traits service hello</h1> */}
        <GlobalStyle />
        <Carousel thumbsTraits={this.state.product_data} />
      </div>

    );
  }
}

export default App;

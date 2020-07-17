/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import defaultState from '../defaultState.js';
import Carousel from './Carousel.jsx';
import GlobalStyle from '../GlobalStyle.js';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const AppStyled = styled.div`
  box-sizing: border-box;
  height: 339px;
  width: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 35px 0;
  background: #282c34;
  color: #a1a7b2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ArrowStyled = styled.i`
  align-self: center;
  font-size: 45px;
  padding-top: 55px;
  padding-right: 8px;
  padding-left: 8px;
  color: #929599;
  transition: color 0.3s ease-out;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(id) {
    // eslint-disable-next-line react/destructuring-assignment
    // const requestURL = `http://127.0.0.1:3005/traits${id}`;
    const requestURL = `http://ec2-3-129-17-68.us-east-2.compute.amazonaws.com:3005/traits${id}`;
    // eslint-disable-next-line no-undef
    console.log(requestURL);
    // eslint-disable-next-line no-undef
    axios
      .get(requestURL)
      .then((response) => {
        console.log('New Data', response.data);
        this.setState({ product_data: response.data });
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
      <AppStyled>
        <GlobalStyle />
        <ArrowStyled>
          <FiChevronLeft />
        </ArrowStyled>
        <Carousel traitThumbs={this.state.product_data} />
        <ArrowStyled>
          <FiChevronRight />
        </ArrowStyled>
      </AppStyled>
    );
  }
}

export default App;

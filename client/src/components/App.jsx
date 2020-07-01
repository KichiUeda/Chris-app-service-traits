/* eslint-disable import/extensions */
import React from 'react';
import Carousel from './Carousel.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This will be Traits service hello</h1>
        <Carousel />
      </div>
    );
  }
}

export default App;

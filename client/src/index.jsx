/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel.jsx';

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

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';
import Carousel from '../client/src/components/Carousel.jsx';
import Card from '../client/src/components/Card.jsx';
import ImageContainer from '../client/src/components/ImageContainer.jsx';
import Label from '../client/src/components/Label.jsx';
import Thumbnail from '../client/src/components/Thumbnail.jsx';

global.expect = expect;
Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('<App />', () => {
  it('renders one Carousel component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Carousel)).to.have.lengthOf(1);
  });
});

describe('<Carousel />', () => {
  it('renders at least four Card components', () => {
    const wrapper = shallow(<Carousel />);

    expect(wrapper.find(Card).length).to.be.above(3);
  });
});

describe('<Card />', () => {
  it('renders one ImageContainer component', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find(ImageContainer)).to.have.lengthOf(1);
  });

  it('renders one Label component', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find(Label)).to.have.lengthOf(1);
  });
});

describe('<ImageContainer />', () => {
  it('renders four Thumbnail components', () => {
    const wrapper = shallow(<ImageContainer />);

    expect(wrapper.find(Thumbnail)).to.have.lengthOf(4);
  });
});

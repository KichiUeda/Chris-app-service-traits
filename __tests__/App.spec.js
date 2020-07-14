/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';
import Carousel from '../client/src/components/Carousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders one Carousel component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Carousel)).toHaveLength(1);
  });
});

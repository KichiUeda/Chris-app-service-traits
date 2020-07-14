/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import defaultState from '../client/src/defaultState.js';
import Carousel from '../client/src/components/Carousel.jsx';
import Card from '../client/src/components/Card.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Carousel />', () => {
  it('renders at least four Card components', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<Carousel traitThumbs={defaultState.product_data} />);

    expect(wrapper.find(Card).length).toBeGreaterThan(3);
  });
});

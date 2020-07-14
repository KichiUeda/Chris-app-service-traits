/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import defaultState from '../client/src/defaultState.js';
import Thumbnail from '../client/src/components/Thumbnail.jsx';
import ThumbnailStyled from '../client/src/components/Thumbnail.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Thumbnail />', () => {
  it('has working click event', () => {
    const onImageClick = sinon.spy();
    const wrapper = shallow(
      <Thumbnail
        onClick={onImageClick}
        thumb={defaultState.product_data[0].thumbnail}
        id={defaultState.product_data[0].product_id}
      />
    );

    wrapper.find(ThumbnailStyled).prop('onClick')();
    expect(onImageClick.calledOnce).toEqual(true);
  });
});

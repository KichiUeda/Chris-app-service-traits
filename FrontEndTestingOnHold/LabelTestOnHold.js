import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import defaultState from '../client/src/defaultState.js';
import Label from '../client/src/components/Label.jsx';

Enzyme.configure({ adapter: new Adapter() });

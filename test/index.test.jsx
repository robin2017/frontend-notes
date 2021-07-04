import React from 'react';
import { shallow } from 'enzyme';
import FrontendNotes from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<FrontendNotes />);
  expect(wrapper.find('.FrontendNotes').length).toBe(1);
});

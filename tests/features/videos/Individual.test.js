import React from 'react';
import { shallow } from 'enzyme';
import { Individual } from '../../../src/features/videos';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Individual />);
  expect(renderedComponent.find('.videos-individual').length).toBe(1);
});

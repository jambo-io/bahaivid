import React from 'react';
import { shallow } from 'enzyme';
import { Teste } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Teste />);
  expect(renderedComponent.find('.home-teste').length).toBe(1);
});

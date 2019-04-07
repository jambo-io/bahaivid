import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/common/Header';

describe('common/Header', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Header {...props} />
    );

    expect(
      renderedComponent.find('.common-header').length
    ).toBe(1);
  });
});

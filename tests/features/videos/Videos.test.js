import React from 'react';
import { shallow } from 'enzyme';
import { Videos } from '../../../src/features/videos/Videos';

describe('videos/Videos', () => {
  it('renders node with correct class name', () => {
    const props = {
      videos: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Videos {...props} />
    );

    expect(
      renderedComponent.find('.videos-videos').length
    ).toBe(1);
  });
});

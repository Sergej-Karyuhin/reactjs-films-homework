import React from 'react';
import renderer from 'react-test-renderer';
import WatchButton from '../WatchButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<WatchButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

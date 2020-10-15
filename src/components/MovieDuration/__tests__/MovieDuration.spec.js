import React from 'react';
import renderer from 'react-test-renderer';
import MovieDuration from '../MovieDuration';

it('renders correctly', () => {
  const tree = renderer
    .create(<MovieDuration />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

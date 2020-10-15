import React from 'react';
import renderer from 'react-test-renderer';
import MovieName from '../MovieName';

it('renders correctly', () => {
  const tree = renderer
    .create(<MovieName />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

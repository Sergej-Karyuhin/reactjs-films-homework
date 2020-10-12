import React from 'react';
import renderer from 'react-test-renderer';
import MovieRating from '../MovieRating';

const rating = 2.5;

it('renders correctly', () => {
  const tree = renderer
    .create(<MovieRating movieRating={rating} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

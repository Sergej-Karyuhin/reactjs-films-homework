import React from 'react';
import renderer from 'react-test-renderer';
import MovieGenres from '../MovieGenres';

const genres = ['Adventure', 'Drama', 'Family', 'Fantasy'];

it('renders correctly', () => {
  const tree = renderer
    .create(<MovieGenres movieGenres={genres} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

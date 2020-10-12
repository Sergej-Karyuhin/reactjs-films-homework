import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from '../SearchInput';

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchInput />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

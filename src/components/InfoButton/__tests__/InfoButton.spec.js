import React from 'react';
import renderer from 'react-test-renderer';
import InfoButton from '../InfoButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<InfoButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

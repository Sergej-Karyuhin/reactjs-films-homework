import React from 'react';
import renderer from 'react-test-renderer';
import Signature from '../Signature';

it('renders correctly', () => {
  const tree = renderer
    .create(<Signature />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

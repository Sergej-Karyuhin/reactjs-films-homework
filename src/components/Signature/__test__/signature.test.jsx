import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../../../App';

test('Application is rendered', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

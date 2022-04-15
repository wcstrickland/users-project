import React from 'react';
import Posts from './../Posts.js';
//import renderer from  'react-test-renderer'

test('renders correctly', ()=> {
  const tree = renderer.create(<Posts/>).toJSON();
  expect(tree).toMatchSnapshot();
})

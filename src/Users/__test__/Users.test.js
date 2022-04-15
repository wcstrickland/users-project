import React from 'react';
import Users from './../Users.js';
//import renderer from  'react-test-renderer'

test('renders correctly', ()=> {
  const tree = renderer.create(<Users/>).toJSON();
  expect(tree).toMatchSnapshot();
})

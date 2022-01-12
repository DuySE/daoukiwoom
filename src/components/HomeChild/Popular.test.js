import Popular from './Popular'
import ReactDOM from 'react-dom'
import React from 'react';

describe('render without crashing', function () {
  it('Popular', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Popular />, div)
  });
})
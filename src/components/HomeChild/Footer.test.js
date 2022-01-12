import Footer from './Footer'
import ReactDOM from 'react-dom'
import React from 'react';

describe('render without crashing', function () {
  it('footer', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div)
  });
})
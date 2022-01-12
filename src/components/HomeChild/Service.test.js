import Service from './Service'
import ReactDOM from 'react-dom'
import React from 'react';

describe('render without crashing', function () {
  it('Service', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Service />, div)
  });
})
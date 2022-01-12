import PriceOption from './PriceOption'
import ReactDOM from 'react-dom'
import React from 'react';

describe('render without crashing', function () {
  it('price option', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PriceOption />, div)
  });
})
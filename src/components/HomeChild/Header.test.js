import Header from './Header'
import ReactDOM from 'react-dom'
import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('render without crashing', function () {
  it('Header', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div)
  });

  it('check logo', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('logo')).toHaveTextContent("")
  });
})
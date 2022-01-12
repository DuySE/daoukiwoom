import TopBar from './TopBar'
import ReactDOM from 'react-dom'
import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('render without crashing', function () {
  it('TopBar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopBar />, div)
  });
})
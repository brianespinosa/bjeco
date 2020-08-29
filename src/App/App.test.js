import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';

describe('app', () => {
  it('renders a splash logo', () => {
    expect.assertions(1);
    const { getByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = getByRole(/img/i);
    expect(linkElement).toBeInTheDocument();
  });
});

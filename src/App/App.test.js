import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders a splash logo', () => {
  const { getByRole } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = getByRole(/img/i);
  expect(linkElement).toBeInTheDocument();
});

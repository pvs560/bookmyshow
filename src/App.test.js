import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders APP', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/BookMyShow/i);
  expect(linkElement).toBeInTheDocument();
});

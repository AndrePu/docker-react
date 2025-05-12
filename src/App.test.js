import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn to develop link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn to develop/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders go go go text', () => {
  render(<App />);
  const linkElement = screen.getByText(/go go go1/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the React app', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // Sesuaikan dengan teks pada komponen Anda
  expect(linkElement).toBeInTheDocument();
});

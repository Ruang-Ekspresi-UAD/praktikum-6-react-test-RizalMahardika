import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter'; // Ganti dengan path ke komponen Counter Anda

test('increments the counter', () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i); // Sesuaikan dengan teks tombol Anda
  fireEvent.click(button);
  const counterValue = screen.getByTestId('counter-value'); // Sesuaikan dengan elemen counter Anda
  expect(counterValue.textContent).toBe('1'); // Sesuaikan dengan logika increment
});

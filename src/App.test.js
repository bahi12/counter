import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterApp from './App';

test('renders CounterApp component', () => {
  render(<CounterApp />);

  // Check if the component renders without errors
  const counterAppElement = screen.getByText(/Counter App/i);
  expect(counterAppElement).toBeInTheDocument();

  // Check if the increment and decrement buttons are present
  const incrementButton = screen.getByText(/Increment/i);
  const decrementButton = screen.getByText(/Decrement/i);
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('increments and decrements count correctly', () => {
  render(<CounterApp />);

  // Initial count should be 0
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  // Increment button click
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent(/Count: 1/i);

  // Decrement button click
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent(/Count: 0/i);
});

// Add more tests as needed...
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import Counter from './Counter';

// Mocking the useEffect hook
jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

describe('Counter Component', () => {
  test('renders with initial count of 0 and step of 1', () => {
    const { getByText, getByLabelText } = render(<Counter />);

    expect(getByText('Count: 0')).toBeInTheDocument();
    expect(getByLabelText('Step:')).toHaveValue('1');
  });

  test('increments count correctly', async () => {
    const { getByText } = render(<Counter />);

    fireEvent.click(getByText('Increment'));

    // Wait for the DOM to update
    await waitFor(() => {
      expect(getByText('Count: 1')).toBeInTheDocument();
    });
  });

  test('decrements count correctly', async () => {
    const { getByText } = render(<Counter />);

    fireEvent.click(getByText('Decrement'));

    // Wait for the DOM to update
    await waitFor(() => {
      expect(getByText('Count: -1')).toBeInTheDocument();
    });
  });

  test('restarts count correctly', async () => {
    const { getByText } = render(<Counter />);

    fireEvent.click(getByText('Increment'));
    fireEvent.click(getByText('Restart'));

    // Wait for the DOM to update
    await waitFor(() => {
      expect(getByText('Count: 0')).toBeInTheDocument();
    });
  });

  test('updates count based on selected step', async () => {
    const { getByLabelText, getByText } = render(<Counter />);

    fireEvent.change(getByLabelText('Step:'), { target: { value: '2' } });
    fireEvent.click(getByText('Increment'));

    // Wait for the DOM to update
    await waitFor(() => {
      expect(getByText('Count: 2')).toBeInTheDocument();
    });
  });
});

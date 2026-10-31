// @vitest-environment jsdom
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import App from './App';

// Explicitly add jest-dom matchers to Vitest's expect
expect.extend(matchers);

test('renders Hello World heading', () => {
  // 1. Render component into virtual screen
  render(<App />);

  // 2. Find "Hello World"
  const headingElement = screen.getByText(/hello world/i);

  // 3. Assert it exists
  expect(headingElement).toBeInTheDocument();
});
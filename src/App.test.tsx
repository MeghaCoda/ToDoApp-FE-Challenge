import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders correctly', () => {
  render(<App />);
  const header = screen.getByText(/To Do App/i);
  expect(header).toBeInTheDocument();
  const ToDoItem = screen.getByText(/This is a single todo item/i);
  expect(ToDoItem).toBeInTheDocument();
  });
});

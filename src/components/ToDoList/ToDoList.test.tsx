import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers
import ToDo from './ToDoList'; // Adjust the import path as needed

describe('<ToDo />', () => {
    it('renders correctly', () => {
  render(<ToDo />); 
  const todoItem = screen.getByText(/This is a single todo item/i);
  expect(todoItem).toBeInTheDocument(); 
    });
});
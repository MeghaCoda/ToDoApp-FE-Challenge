import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers
import ToDo from './ToDo'; // Adjust the import path as needed

describe('<ToDo />', () => {
    it('renders correctly', () => {
  render(<ToDo />); 
  const title = screen.getByText(/this is a single todo item/i);
  expect(title).toBeInTheDocument(); 
    });
});
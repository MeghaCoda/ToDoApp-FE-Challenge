import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers
import Header from './Header'; // Adjust the import path as needed

describe('<Header />', () => {
    it('renders correctly', () => {
  render(<Header />); 
  const headerElement = screen.getByText(/To Do App/i);
  expect(headerElement).toBeInTheDocument(); 
    });
});
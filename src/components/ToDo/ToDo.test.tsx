import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers
import ToDo from './ToDo'; // Adjust the import path as needed

describe('<ToDo />', () => {
  it('renders correctly', () => {
    render(<ToDo
    onChange={() => {}}
      description='This is a description'
      isComplete={false}
      dueDate='2024-10-03T22:51:28.786143'
    />);
    const title = screen.getByText(/this is a description/i);
    expect(title).toBeInTheDocument();
  });
});
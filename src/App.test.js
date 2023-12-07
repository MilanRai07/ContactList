import { render, screen } from '@testing-library/react';
import ContactIndex from './ContactIndex';

test('renders learn react link', () => {
  render(<ContactIndex/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

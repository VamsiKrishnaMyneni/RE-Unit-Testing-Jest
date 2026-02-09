import { render, screen } from '@testing-library/react';
import App from './App';



describe("App Tests", () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Unit Testing React, Jest/i);
    expect(linkElement).toBeInTheDocument();
  });

});

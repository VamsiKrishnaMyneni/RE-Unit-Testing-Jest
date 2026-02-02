import { render, screen } from '@testing-library/react';
import App from './App';



describe("App Tests", () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Unit Testing React, Jest/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders svg sprite icon', () => {
    render(<App />);
    const svgElement = screen.getByTestId('sprite-icon');
    expect(svgElement).toBeInTheDocument();
  });
});

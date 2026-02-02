import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


describe('Greet Component', () => {
    test('Greet component assertion', () => {
        render(<Greet />);
        const greetElement = screen.getByText('Greet Component');

        expect(greetElement).toBeInTheDocument();
    });
    test('should render with default name when no name prop is provided', () => {
        render(<Greet />);
        const greetElement = screen.getByText('Greet Component');

        expect(greetElement).toBeInTheDocument();
    });

    test('should render with provided name prop', () => {
        render(<Greet name="Arya" />);
        const nameElement = screen.getByText('Arya');
        expect(nameElement).toBeInTheDocument();
    });
});
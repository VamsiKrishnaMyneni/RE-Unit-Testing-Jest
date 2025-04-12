import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Tests", () => {
    test("Greet component rendered correctly", () => {
        render(<Greet />);
        const greetText = screen.getByText(/the king in the north/i);
        expect(greetText).toBeInTheDocument();
    });

    test("verify name is rendered", () => {
        render(<Greet name='Jhon Snow' />);
        const nameText = screen.getByText(/jhon snow/i);
        expect(nameText).toBeInTheDocument();
    });
});
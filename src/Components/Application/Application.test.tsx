import { render, screen } from "@testing-library/react";
import Application from "./Application";
import exp from "constants";


describe("Application Component", () => {

    test("should render the Application component", () => {
        render(<Application />);

        const nameElement = screen.getByRole('textbox', { name: "First Name" });
        expect(nameElement).toBeInTheDocument();

        const lastNameElement = screen.getByRole('textbox', { name: "Last Name" });
        expect(lastNameElement).toBeInTheDocument();

        const roleSelect = screen.getByRole('combobox');
        expect(roleSelect).toBeInTheDocument();

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();


        const formHeadingElement = screen.getByRole('heading', { name: "Application Form" });
        expect(formHeadingElement).toBeInTheDocument();
    });

    test("should render the Application form input values", () => {
        render(<Application />);


        const nameTextElement = screen.getByLabelText("First Name");
        expect(nameTextElement).toBeInTheDocument();
        expect(nameTextElement).toHaveValue("Vamsi Krishna");
    });
    it('query elements with placeholder text', () => {
        render(<Application />);
        const firstNameInput = screen.getByPlaceholderText('First Name');
        expect(firstNameInput).toBeInTheDocument();
        expect(firstNameInput).toHaveValue('Vamsi Krishna');
    });

    it('get element with by text', () => {
        render(<Application />);
        const headingElement = screen.getByText('Application Form2');
        expect(headingElement).toBeInTheDocument();
    });

    it('get element by display value', () => {

        render(<Application />);
        const firstNameInput = screen.getByDisplayValue('Vamsi Krishna');
        expect(firstNameInput).toBeInTheDocument();
    });

    it('get element by alt text', () => {
        render(<Application />);
        const imageElement = screen.getByAltText('placeholder_image');
        expect(imageElement).toBeInTheDocument();
    });

    it('get element by title', () => {
        render(<Application />);
        const spanElement = screen.getByTitle('Testing library practice');
        expect(spanElement).toBeInTheDocument();
    });

    it('get element by test id', () => {
        render(<Application />);
        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();
    });
});
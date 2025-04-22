import { render, screen } from "@testing-library/react";
import SignupForm from "./SignupForm";


describe("SignUpForm", () => {

    it("check if signupForm Component rendered", () => {
        render(<SignupForm />);
        const nameText = screen.getByText('Signup Form');
        expect(nameText).toBeInTheDocument();
    })

})
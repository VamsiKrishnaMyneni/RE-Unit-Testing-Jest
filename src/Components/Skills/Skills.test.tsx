import { render, screen } from "@testing-library/react";
import Skills from "./Skills";



describe("Skills component", () => {
    const skills = ["JavaScript", "React", "Node.js"];

    it("renders skills component correctly", () => {
        render(<Skills skills={skills} />);
        const skillElements = screen.getByRole("list");
        expect(skillElements).toBeInTheDocument();
    });

    it("renders skill names correctly", () => {
        render(<Skills skills={skills} />);

        const skillElements = screen.getAllByRole("listitem");
        expect(skillElements).toHaveLength(skills.length);
    });

});
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

describe("Input Component", () => {
	it("renders a text input", () => {
		render(<Input type="text" defaultValue="test" />);
		const inputElement = screen.getByDisplayValue("test");
		expect(inputElement).toBeInTheDocument();
	});

	it("renders a number input", () => {
		render(<Input type="number" defaultValue="123" />);
		const inputElement = screen.getByDisplayValue("123");
		expect(inputElement).toBeInTheDocument();
	});

	it("renders a date input", () => {
		render(<Input type="date" defaultValue="2023-01-01" />);
		const inputElement = screen.getByDisplayValue("2023-01-01");
		expect(inputElement).toBeInTheDocument();
	});

	it("renders a checkbox input", () => {
		render(<Input type="checkbox" />);
		const inputElement = screen.getByRole("checkbox");
		expect(inputElement).toBeInTheDocument();
	});

	it("renders a radio input", () => {
		render(<Input type="radio" />);
		const inputElement = screen.getByRole("radio");
		expect(inputElement).toBeInTheDocument();
	});
});

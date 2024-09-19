import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Textbox from "./Textbox";

describe("Textbox Component", () => {
	it("renders the textarea with default props", () => {
		render(<Textbox />);
		const textarea = screen.getByPlaceholderText("Text area...");
		expect(textarea).toBeInTheDocument();
		expect(textarea).toHaveAttribute("rows", "4");
		expect(textarea).toHaveAttribute("cols", "50");
	});

	it("renders the textarea with a custom placeholder", () => {
		render(<Textbox placeholder="Enter text here..." />);
		const textarea = screen.getByPlaceholderText("Enter text here...");
		expect(textarea).toBeInTheDocument();
	});

	it("updates value on change event", () => {
		render(<Textbox />);
		const textarea = screen.getByPlaceholderText("Text area...");
		fireEvent.change(textarea, { target: { value: "New text" } });
		expect(textarea).toHaveValue("New text");
	});

	it("sanitizes input when sanitized prop is true", () => {
		render(<Textbox sanitized />);
		const textarea = screen.getByPlaceholderText("Text area...");
		fireEvent.change(textarea, {
			target: { value: "<script>alert('xss')</script>" },
		});
		expect(textarea).toHaveValue("");
	});

	it("applies custom props correctly", () => {
		render(
			<Textbox
				rows={6}
				cols={60}
				name="customTextbox"
				className="custom-class"
			/>,
		);
		const textarea = screen.getByPlaceholderText("Text area...");
		expect(textarea).toHaveAttribute("rows", "6");
		expect(textarea).toHaveAttribute("cols", "60");
		expect(textarea).toHaveAttribute("name", "customTextbox");
		expect(textarea).toHaveClass("custom-class");
	});
});

import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
	it("renders correctly with children", () => {
		const { getByText } = render(<Button>Click me</Button>);
		expect(getByText("Click me")).toBeInTheDocument();
	});

	it("calls onClick when clicked", () => {
		const handleClick = vi.fn();
		const { getByText } = render(
			<Button onClick={handleClick}>Click me</Button>,
		);
		fireEvent.click(getByText("Click me"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("applies the correct variant styles", () => {
		const { getByText, rerender } = render(
			<Button variant="contained">Click me</Button>,
		);
		expect(getByText("Click me")).toHaveClass(
			"bg-amber-500 text-slate-50 hover:bg-amber-400",
		);

		rerender(<Button variant="outlined">Click me</Button>);
		expect(getByText("Click me")).toHaveClass(
			"border border-amber-500 bg-amber-500 bg-opacity-0 text-slate-500 hover:bg-opacity-10",
		);

		rerender(<Button variant="disabled">Click me</Button>);
		expect(getByText("Click me")).toHaveClass(
			"bg-slate-700 text-slate-400 cursor-not-allowed pointer-events-none font-inherit",
		);
	});

	it("applies the correct size styles", () => {
		const { getByText, rerender } = render(
			<Button size="small">Click me</Button>,
		);
		expect(getByText("Click me")).toHaveClass("text-sm");

		rerender(<Button size="base">Click me</Button>);
		expect(getByText("Click me")).toHaveClass("text-base");

		rerender(<Button size="large">Click me</Button>);
		expect(getByText("Click me")).toHaveClass("text-lg");
	});

	it("applies additional class names", () => {
		const { getByText } = render(
			<Button className="extra-class">Click me</Button>,
		);
		expect(getByText("Click me")).toHaveClass("extra-class");
	});
});

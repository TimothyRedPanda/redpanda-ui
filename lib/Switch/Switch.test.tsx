import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch Component", () => {
	it("renders the Switch component with default variant", () => {
		render(<Switch />);
		const switchElement = screen.getByRole("checkbox");
		expect(switchElement).toBeInTheDocument();
	});

	it("renders the Switch component with live variant", () => {
		render(<Switch variant="live" />);
		const switchElement = screen.getByRole("checkbox");
		expect(switchElement).toBeInTheDocument();
		expect(switchElement.parentElement).toHaveClass(
			"bg-blue-950 peer-checked:bg-amber-400 cursor-pointer relative inline-block w-16 h-8 rounded-full",
		);
	});

	it("renders the Switch component with disabled variant", () => {
		render(<Switch variant="disabled" />);
		const switchElement = screen.getByRole("checkbox");
		expect(switchElement).toBeInTheDocument();
		expect(switchElement.parentElement).toHaveClass(
			"bg-slate-700 pointer-events-none click-events-none cursor-none opacity-50 relative inline-block w-16 h-8 rounded-full",
		);
	});

	it("calls onClick handler when clicked", () => {
		const handleClick = vi.fn();
		render(<Switch onClick={handleClick} />);
		const switchElement = screen.getByRole("checkbox");
		fireEvent.click(switchElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
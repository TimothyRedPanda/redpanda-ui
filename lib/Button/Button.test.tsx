import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { describe, it, expect, vi } from "vitest";

describe("Button Component", () => {
	const renderButton = (
		children: string,
		variant?: "contained" | "outlined" | "disabled",
		onClick?: () => void,
	) => {
		const { getByText } = render(
			<Button variant={variant} onClick={onClick}>
				{children}
			</Button>,
		);
		return getByText(children);
	};

	const commonAssertions = (buttonElement: HTMLElement) => {
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveClass("py-2");
		expect(buttonElement).toHaveClass("px-4");
		expect(buttonElement).toHaveClass("rounded-3xl");
		expect(buttonElement).toHaveClass("transition-all");
		expect(buttonElement).toHaveClass("w-fit");
		expect(buttonElement).toHaveClass("duration-500");
	};

	it("renders with default class", () => {
		const buttonElement = renderButton("Default");
		commonAssertions(buttonElement);
		expect(buttonElement).toHaveClass("bg-transparent");
		expect(buttonElement).toHaveClass("text-slate-400");
		expect(buttonElement).toHaveClass("hover:text-slate-800");
		expect(buttonElement).toHaveClass("font-bold");
	});

	it("renders with contained class", () => {
		const buttonElement = renderButton("Contained", "contained");
		commonAssertions(buttonElement);
		expect(buttonElement).toHaveClass("bg-amber-500");
		expect(buttonElement).toHaveClass("text-slate-50");
		expect(buttonElement).toHaveClass("hover:bg-amber-400");
	});

	it("renders with outlined class", () => {
		const buttonElement = renderButton("Outlined", "outlined");
		commonAssertions(buttonElement);
		expect(buttonElement).toHaveClass("border");
		expect(buttonElement).toHaveClass("border-amber-500");
		expect(buttonElement).toHaveClass("bg-amber-500");
		expect(buttonElement).toHaveClass("bg-opacity-0");
		expect(buttonElement).toHaveClass("text-slate-500");
		expect(buttonElement).toHaveClass("hover:bg-opacity-10");
	});

	it("renders with disabled class", () => {
		const buttonElement = renderButton("Disabled", "disabled");
		commonAssertions(buttonElement);
		expect(buttonElement).toHaveClass("bg-slate-700");
		expect(buttonElement).toHaveClass("text-slate-400");
		expect(buttonElement).toHaveClass("cursor-not-allowed");
		expect(buttonElement).toHaveClass("pointer-events-none");
		expect(buttonElement).toHaveClass("font-inherit");
	});

	it("handles onClick event", () => {
		const handleClick = vi.fn();
		const buttonElement = renderButton("Click Me", undefined, handleClick);
		fireEvent.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});

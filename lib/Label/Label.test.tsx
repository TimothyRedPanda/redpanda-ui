import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./Label";

describe("Label Component", () => {
	it("renders correctly with given label", () => {
		const { getByText } = render(<Label label="Test Label" />);
		expect(getByText("Test Label")).toBeInTheDocument();
	});

	it("applies the correct size class based on size prop", () => {
		const { container: smallContainer } = render(
			<Label label="Small Label" size="small" />,
		);
		expect(smallContainer.firstChild).toHaveClass("text-sm");

		const { container: baseContainer } = render(
			<Label label="Base Label" size="base" />,
		);
		expect(baseContainer.firstChild).toHaveClass("text-base");

		const { container: largeContainer } = render(
			<Label label="Large Label" size="large" />,
		);
		expect(largeContainer.firstChild).toHaveClass("text-lg");
	});

	it("applies the default size class when size prop is not provided", () => {
		const { container } = render(<Label label="Default Size Label" />);
		expect(container.firstChild).toHaveClass("text-base");
	});
});

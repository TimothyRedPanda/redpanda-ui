import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
	it("Should render", () => {
		const { container } = render(<Button>Click Me</Button>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <button
			    class="px-4 py-2 bg-amber-400 shadow-custom hover:bg-amber-500 transition-all text-amber-950 rounded-3xl"
			    type="button"
			  >
			    Click Me
			  </button>
			</div>
		`);
	});
});

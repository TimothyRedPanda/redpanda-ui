import type { Meta, StoryObj } from "@storybook/react";
import { Textbox } from "./Textbox";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Textbox> = {
	component: Textbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {
	name: "Default Textbox",
	args: {
		rows: 4,
		cols: 50,
		name: "defaultTextbox",
		className: "",
		sanitized: false,
		onChange: action("onChange"),
	},
};

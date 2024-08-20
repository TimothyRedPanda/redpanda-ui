import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Input> = {
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	name: "Default Input",
	args: {
		type: "text",
		onChange: action("onChange"),
		onClick: action("onClick"),
	},
};

export const Checkbox: Story = {
	name: "Checkbox Input",
	args: {
		type: "checkbox",
		onChange: action("onChange"),
		onClick: action("onClick"),
	},
};

export const Radio: Story = {
	name: "Radio Input",
	args: {
		type: "radio",
		onChange: action("onChange"),
		onClick: action("onClick"),
	},
};

export const DatePicker: Story = {
	name: "Date Input",
	args: {
		type: "date",
		onChange: action("onChange"),
		onClick: action("onClick"),
	},
};

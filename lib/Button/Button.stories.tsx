import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	name: "Default Button",
	args: {
		children: "Default",
		onClick: action("onClick Triggered"),
	},
};

export const Contained: Story = {
	name: "Contained Button",
	args: {
		children: "Contained",
		variant: "contained",
		onClick: action("onClick Triggered"),
	},
};

export const Outlined: Story = {
	name: "Outlined Button",
	args: {
		children: "Outlined",
		variant: "outlined",
		onClick: action("onClick Triggered"),
	},
};

export const Disabled: Story = {
	name: "Disabled Button",
	args: {
		children: "Disabled",
		variant: "disabled",
		onClick: action("onClick Triggered"),
	},
};

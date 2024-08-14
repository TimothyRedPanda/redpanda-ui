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
	args: {
		children: "Default",
		onClick: action("onClick Triggered"),
	},
};

export const Contained: Story = {
	args: {
		children: "Contained",
		variant: "contained",
		onClick: action("onClick Triggered"),
		size: "small",
	},
};

export const Outlined: Story = {
	args: {
		children: "Outlined",
		variant: "outlined",
		onClick: action("onClick Triggered"),
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled",
		variant: "disabled",
		onClick: action("onClick Triggered"),
		size: "large",
	},
};

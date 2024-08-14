import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
	component: Switch,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	name: "Default Switch",
	args: {
		onClick: action("onClick Triggered"),
	},
};

export const Live: Story = {
	name: "Live Switch",
	args: {
		variant: "live",
		onClick: action("onClick Triggered"),
	},
};

export const Disabled: Story = {
	name: "Disabled Switch",
	args: {
		variant: "disabled",
	},
};

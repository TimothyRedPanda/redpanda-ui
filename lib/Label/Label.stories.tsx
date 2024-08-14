import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
	component: Label,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	name: "Default Label",
	args: {
		label: "Default Label",
	},
};

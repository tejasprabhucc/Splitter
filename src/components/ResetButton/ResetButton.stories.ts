import { StoryObj, Meta } from "@storybook/react";
import ResetButton, { ResetButtonProps } from "./ResetButton";

const meta: Meta<ResetButtonProps> = {
  title: "Splitter/ResetButton",
  component: ResetButton,
  parameters: {
    layout: "top-left",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { action: "text" },
    onClickHandler: { action: "clicked" },
    resetEnabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Reset",
    onClickHandler: () => console.log("Reset button clicked"),
    resetEnabled: true,
  },
};
export const Disabled: Story = {
  args: {
    value: "Reset",
    resetEnabled: false,
  },
};

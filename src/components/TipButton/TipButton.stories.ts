import { Meta, StoryObj } from "@storybook/react";
import TipButtom, { TipButtonProps } from "./TipButton";

const meta: Meta<TipButtonProps> = {
  title: "Splitter/TipButtom",
  component: TipButtom,
  parameters: {
    layout: "top-left",
  },
  argTypes: {
    value: { control: "select", options: [5, 10, 15, 25, 50, "custom"] },
    customValue: { control: "text" },
    onClickHandler: { action: "clicked" },
    onChangeHandler: { action: "changed" },
    customValueErr: { control: "boolean" },
    isCustomTipActive: { control: "boolean" },
    isSelected: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "custom",
    isCustomTipActive: false,
  },
};
export const CustomInput: Story = {
  args: {
    value: "custom",
    customValue: "0",
    isCustomTipActive: true,
  },
};

export const Fifteen: Story = {
  args: {
    value: 15,
  },
};

export const Twenty: Story = {
  args: {
    value: 20,
  },
};

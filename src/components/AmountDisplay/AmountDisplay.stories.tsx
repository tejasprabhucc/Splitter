import { StoryObj, Meta } from "@storybook/react";
import AmountDisplay, { AmountDisplayProps } from "./AmountDisplay";

const meta: Meta<AmountDisplayProps> = {
  title: "Splitter/AmountDisplay",
  component: AmountDisplay,
  parameters: {
    layout: "top-left",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "select",
      options: ["Total", "Total Tip"],
    },
    value: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Total: Story = {
  args: {
    label: "Total",
    value: 123.45,
  },
};

export const TotalTip: Story = {
  args: {
    label: "Total Tip",
    value: 67.89,
  },
};

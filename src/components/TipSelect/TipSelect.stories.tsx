import { StoryObj, Meta } from "@storybook/react";
import TipSelect, { TipSelectProps } from "./TipSelect";

const meta: Meta<TipSelectProps> = {
  title: "Splitter/TipSelect",
  component: TipSelect,
  parameters: {
    layout: "top-left",
  },
  tags: ["autodocs"],
  argTypes: {
    selectedTip: { action: "number" },
    handleTipChange: { action: "Changed" },
    handleCustomTipChange: { action: "Changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedTip: 25,
  },
};

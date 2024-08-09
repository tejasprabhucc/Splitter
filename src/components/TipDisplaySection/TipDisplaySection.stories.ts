import { StoryObj, Meta } from "@storybook/react";
import TipDisplaySection, { TipDisplaySectionProps } from "./TipDisplaySection";

const meta: Meta<TipDisplaySectionProps> = {
  title: "Splitter/TipDisplaySection",
  component: TipDisplaySection,
  parameters: {
    layout: "top-left",
  },
  tags: ["autodocs"],
  argTypes: {
    totalValues: {
      control: "object",
    },
    handleReset: { action: "resetClicked" },
    resetEnabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ResetEnabled: Story = {
  args: {
    totalValues: {
      calculatedTip: 7.5,
      calculatedTotal: 35.0,
    },
    handleReset: () => console.log("Reset clicked"),
    resetEnabled: true,
  },
};
export const ResetDisabled: Story = {
  args: {
    totalValues: {
      calculatedTip: 0.0,
      calculatedTotal: 0.0,
    },
    handleReset: () => console.log("Reset clicked"),
    resetEnabled: false,
  },
};

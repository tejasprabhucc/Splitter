import { StoryObj, Meta } from "@storybook/react";
import TipInputSection, { TipInputSectionProps } from "./TipInputSection";

const meta: Meta<TipInputSectionProps> = {
  title: "Splitter/TipInputSection",
  component: TipInputSection,
  parameters: {
    layout: "top-left",
  },
  tags: ["autodocs"],
  argTypes: {
    billAmount: { action: "number" },
    handleBillChange: { action: "Changed" },
    numberOfPeople: { action: "number" },
    handlePeopleChange: { action: "Changed" },
    selectedTip: { action: "number" },
    handleTipChange: { action: "Changed" },
    handleCustomTipChange: { action: "Changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    billAmount: "100",
    numberOfPeople: "2",
    selectedTip: 20,
  },
};

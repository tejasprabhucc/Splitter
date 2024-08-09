// NumberInput.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import NumberInput, { NumberInputProps } from "./NumberInput";

const meta: Meta<NumberInputProps> = {
  title: "Splitter/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "top-left",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    label: { control: "text" },
    typeofIcon: { control: "select" },
    isError: { control: "boolean" },
    errorMessage: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<NumberInputProps>;

export const Dollar: Story = {
  args: {
    label: "Bill",
    value: "10",
    typeofIcon: "dollar",
    isError: false,
    errorMessage: "",
  },
};

export const Person: Story = {
  args: {
    label: "Number of people",
    value: "10",
    typeofIcon: "person",
    isError: false,
    errorMessage: "",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Bill",
    value: "10",
    typeofIcon: "dollar",
    isError: true,
    errorMessage: "This is an error message.",
  },
};

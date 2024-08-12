export interface AmountDisplayProps {
  label: "Total" | "Total Tip";
  value: number | string;
}

const AmountDisplay = ({ label, value }: AmountDisplayProps) => {
  const formattedValue = typeof value === "string" ? value : value.toFixed(2);

  return (
    // Amount display component
    <div className="flex justify-between font-bold text-[#2cc0ad] w-full mb-16 md:mb-8 font-space-mono">
      {/* Lable for amount display  */}
      <div className="text-left text-xl md:text-lg">
        <span>{label}</span>
        <br />
        <span>{"/ person"}</span>
      </div>

      {/* Value for amount display   */}
      <span className="text-4xl font-space-mono md:text-2xl sm:text-xl">
        ${formattedValue}
      </span>
    </div>
  );
};

export default AmountDisplay;

import AmountDisplay from "../AmountDisplay/AmountDisplay";
import ResetButton from "../ResetButton/ResetButton";

export interface TipDisplaySectionProps {
  totalValues: {
    calculatedTip: number | string;
    calculatedTotal: number | string;
  };
  handleReset: () => void;
  resetEnabled: boolean;
}

const TipDisplaySection = ({
  totalValues,
  handleReset,
  resetEnabled,
}: TipDisplaySectionProps) => {
  return (
    // Container for amount display section
    <div className="flex flex-col justify-between w-full h-full rounded-2xl bg-green p-10 md:p-8 sm:p-4">
      <div>
        <AmountDisplay label="Total Tip" value={totalValues.calculatedTip} />
        <AmountDisplay label="Total" value={totalValues.calculatedTotal} />
      </div>
      <ResetButton
        value={"Reset"}
        onClickHandler={handleReset}
        resetEnabled={resetEnabled}
      />
    </div>
  );
};

export default TipDisplaySection;

import { useState } from "react";
import TipButton from "../TipButton/TipButton";

export interface TipSelectProps {
  selectedTip: number;
  handleTipChange: (value: number) => void;
  handleCustomTipChange: (value: string) => void;
}

type ButtonValues = "custom" | number;

const TipSelect = ({
  selectedTip,
  handleTipChange,
  handleCustomTipChange,
}: TipSelectProps) => {
  const tipValues: ButtonValues[] = [5, 10, 15, 25, 50, "custom"];
  const [isCustomTipActive, setIsCustomTipActive] = useState(false);

  const onClickHandler = (value: ButtonValues) => {
    if (value === "custom") {
      handleTipChange(0);
      setIsCustomTipActive(true);
    } else {
      handleTipChange(value as number);
      setIsCustomTipActive(false);
    }
  };

  return (
    // Main container for tip select component
    <div className="flex flex-col space-y-3 w-full">
      <p className="text-xl font-bold text-left">Select Tip %</p>

      {/* Grid conatiner for tip buttons  */}
      <div className="grid grid-cols-3 gap-4">
        {tipValues.map((value) => (
          <TipButton
            key={value}
            value={value}
            customValue={selectedTip.toString()}
            onClickHandler={() => onClickHandler(value)}
            onChangeHandler={(e) => handleCustomTipChange(e.target.value)}
            customValueErr={selectedTip < 0 || isNaN(selectedTip)}
            isCustomTipActive={isCustomTipActive}
            isSelected={selectedTip === Number(value)}
          />
        ))}
      </div>

      {/* Error display for invalid custom tip input  */}
      <div className="text-error text-base font-bold min-h-[1.5rem] -mt-1 sm:text-sm">
        <p>
          {selectedTip < 0 || isNaN(selectedTip)
            ? "Custom tip must be a positive number"
            : ""}
        </p>
      </div>
    </div>
  );
};

export default TipSelect;

import { useState } from "react";
import TipButton from "../TipButton/TipButton";
import styles from "./TipSelect.module.css";

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

  // const isCustomTipActive = (selectedTip === 0)

  return (
    <div className={styles.container}>
      <p className={styles.title}>Select Tip %</p>
      <div className={styles.btnGrid}>
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

      <div className={styles.error_message}>
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

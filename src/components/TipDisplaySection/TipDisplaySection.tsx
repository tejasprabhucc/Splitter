import styles from "./TipDisplaySection.module.css";
import AmountDisplay from "../AmountDisplay/AmountDisplay";
import ResetButton from "../ResetButton/ResetButton";

export interface TipDisplaySectionProps {
  // Define your props here
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
    <div className={styles.displayContainer}>
      <div className={styles.amountDisplay}>
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

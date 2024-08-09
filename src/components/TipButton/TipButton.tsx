import styles from "./TipButton.module.css";

export interface TipButtonProps {
  value: number | string;
  customValue: string;
  onClickHandler: () => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customValueErr: boolean;
  isCustomTipActive: boolean;
  isSelected: boolean;
}

const TipButton = ({
  value,
  customValue,
  onClickHandler,
  onChangeHandler,
  customValueErr,
  isCustomTipActive,
  isSelected,
}: TipButtonProps) => {
  const selectedClass = isSelected ? styles.selected : "";
  const buttonClass = value === "custom" ? styles.customBtn : styles.tipBtn;
  const errorStyles = customValueErr ? styles.error : "";

  return (
    <>
      {value === "custom" && isCustomTipActive ? (
        <div className={styles.inputContainer}>
          <input
            value={customValue}
            type="number"
            className={`${styles.customInput} ${errorStyles}`}
            placeholder="Custom"
            onChange={onChangeHandler}
            autoFocus
          />
        </div>
      ) : (
        <button
          className={`${buttonClass} ${selectedClass}`}
          onClick={onClickHandler}
        >
          {value === "custom" ? "Custom" : `${value}%`}
        </button>
      )}
    </>
  );
};

export default TipButton;

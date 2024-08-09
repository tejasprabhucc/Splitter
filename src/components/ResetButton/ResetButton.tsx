import styles from "./ResetButton.module.css";

export interface ResetButtonProps {
  value: "Reset";
  onClickHandler: () => void;
  resetEnabled: boolean;
}

const ResetButton = ({
  value,
  onClickHandler,
  resetEnabled,
}: ResetButtonProps) => {
  return (
    <button
      type="reset"
      className={styles.resetBtn}
      onClick={onClickHandler}
      disabled={resetEnabled}
    >{`${value}`}</button>
  );
};

export default ResetButton;

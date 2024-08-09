import styles from "./NumberInput.module.css";
import "../../App.css";
import person from "../../assets/User.svg";
import dollar from "../../assets/dollar.svg";

export interface NumberInputProps {
  // extends React.ComponentPropsWithoutRef<"input">
  /**
   * Label for the input
   */
  label: string;
  /**
   * icon for the input
   */
  typeofIcon: "person" | "dollar";
  /**
   * value for the input
   */
  value: string;
  /**
   * Change Event handler
   */
  onChange: (value: string) => void;
  /**
   * Error flag (set if there is wrong value entered)
   */
  isError: boolean;
  /**
   * Custom error message to display
   */
  errorMessage?: string;
}

const NumberInput = ({
  label,
  typeofIcon,
  value,
  onChange,
  isError,
  errorMessage,
}: NumberInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="number-input" className={styles.label}>
        {label}
      </label>
      <div className={`${styles.inputField} ${isError ? styles.error : ""}`}>
        <span>
          {typeofIcon === "person" ? (
            <img src={person} alt="Person Icon" />
          ) : (
            <img src={dollar} alt="Dollar Icon" />
          )}
        </span>
        <input
          type="number"
          id="number-input"
          className={styles.numberInput}
          value={value}
          onChange={handleInputChange}
        />
      </div>

      <p className={styles.error_message}>{isError ? `${errorMessage}` : ""}</p>
    </div>
  );
};

export default NumberInput;

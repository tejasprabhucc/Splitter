import styles from "./AmountDisplay.module.css";

export interface AmountDisplayProps {
  label: "Total" | "Total Tip";
  value: number | string;
}

const AmountDisplay = ({ label, value }: AmountDisplayProps) => {
  const formattedValue = typeof value === "string" ? value : value.toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>{label}</span>
        <br />
        <span>{"/ person"}</span>
      </div>
      <span className={styles.amount}>${formattedValue}</span>
    </div>
  );
};

export default AmountDisplay;

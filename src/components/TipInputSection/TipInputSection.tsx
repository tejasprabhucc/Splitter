import styles from "./TipInputSection.module.css";
import NumberInput from "../NumberInput/NumberInput";
import TipSelect from "../TipSelect/TipSelect";

export interface TipInputSectionProps {
  billAmount: string;
  handleBillChange: (value: string) => void;
  numberOfPeople: string;
  handlePeopleChange: (value: string) => void;
  selectedTip: number;
  handleTipChange: (value: number) => void;
  handleCustomTipChange: (value: string) => void;
}

const TipInputSection = ({
  billAmount,
  handleBillChange,
  numberOfPeople,
  handlePeopleChange,
  selectedTip,
  handleTipChange,
  handleCustomTipChange,
}: TipInputSectionProps) => {
  const billError = isNaN(Number(billAmount)) || Number(billAmount) < 0;
  const peopleError =
    isNaN(Number(numberOfPeople)) || Number(numberOfPeople) <= 0;

  return (
    <div className={styles.inputsContainer}>
      <NumberInput
        label="Bill"
        typeofIcon="dollar"
        value={billAmount}
        onChange={handleBillChange}
        isError={billError}
        errorMessage="Bill amount must be greater than zero."
      />
      <TipSelect
        selectedTip={selectedTip}
        handleTipChange={handleTipChange}
        handleCustomTipChange={handleCustomTipChange}
      />
      <NumberInput
        label="Number of people"
        typeofIcon="person"
        value={numberOfPeople}
        onChange={handlePeopleChange}
        isError={peopleError}
        errorMessage="Number of people must be greater than zero."
      />
    </div>
  );
};

export default TipInputSection;

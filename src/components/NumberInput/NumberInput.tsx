import person from "../../assets/User.svg";
import dollar from "../../assets/dollar.svg";
import { useId } from "react";
import clsx from "clsx";

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

  const numberInputId = useId();

  return (
    // Container for number input including lable and input
    <div className="flex flex-col items-start gap-2.5 w-full box-border font-space-mono">
      {/* Lable for number input  */}
      <label
        htmlFor="number-input"
        className="text-lg font-bold font-space-mono md:text-base sm:text-sm "
      >
        {label}
      </label>

      {/* Number input container with icon and input tag */}
      <div
        className={clsx(
          "flex items-center justify-between bg-[#f3f8fb] font-bold px-5 py-2 rounded-md w-full border-2 ",
          isError
            ? "border-error focus-within:border-error"
            : "border-transparent focus-within:border-green"
        )}
      >
        <span>
          {typeofIcon === "person" ? (
            <img src={person} alt="Person Icon" />
          ) : (
            <img src={dollar} alt="Dollar Icon" />
          )}
        </span>
        <input
          type="number"
          id={numberInputId}
          className="bg-transparent text-green border-none text-2xl leading-normal font-bold text-right outline-none w-full md:text-2xl sm:text-base no-arrows"
          value={value}
          onChange={handleInputChange}
        />
      </div>

      {/* Error display for invalid inputs  */}
      <p className="text-error text-base font-bold min-h-[1.5rem] -mt-1 sm:text-sm">
        {isError ? `${errorMessage}` : ""}
      </p>
    </div>
  );
};

export default NumberInput;

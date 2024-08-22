import clsx from "clsx";

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
  return (
    <>
      {value === "custom" && isCustomTipActive ? (
        <div className="w-full flex">
          <input
            value={customValue}
            type="number"
            className={clsx(
              `w-full px-5 py-1.5 text-xl rounded-md text-center outline-none`,
              customValueErr
                ? "border-error focus:border-error"
                : "border-transparent focus:border-green",
              "bg-[#f3f8fb] text-[#00474b] border-2",
              "md:text-lg md:py-2 sm:text-base"
            )}
            placeholder="Custom"
            onChange={onChangeHandler}
            autoFocus
          />
        </div>
      ) : (
        <button
          className={clsx(
            "rounded-md px-5 py-2 text-xl leading-loose w-full text-center border-2 border-transparent",
            "md:text-lg md:py-2 sm:text-base",
            isSelected ? "bg-[#26c2ad]" : "bg-[#00474b]",
            value === "custom" ? "bg-[#f3f8fb] text-[#00474b]" : "text-white"
          )}
          onClick={onClickHandler}
        >
          {value === "custom" ? "Custom" : `${value}%`}
        </button>
      )}
    </>
  );
};

export default TipButton;

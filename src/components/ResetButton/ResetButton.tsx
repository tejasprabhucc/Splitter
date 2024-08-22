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
      className="bg-[#2cc0ad] text-green rounded-md border-none px-12 py-2 text-xl leading-loose disabled:bg-[#0d686d] 
        md:px-12 md:py-2 md:text-xl 
        sm:px-12 sm:py-2 sm:text-base"
      onClick={onClickHandler}
      disabled={resetEnabled}
    >{`${value}`}</button>
  );
};

export default ResetButton;

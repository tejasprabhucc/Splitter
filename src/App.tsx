import { useReducer } from "react";

import TipInputSection from "./components/TipInputSection/TipInputSection";
import TipDisplaySection from "./components/TipDisplaySection/TipDisplaySection";

type State = {
  billAmount: string;
  numberOfPeople: string;
  selectedTip: number;
};

export type Action =
  | { type: "SET_BILL_AMOUNT"; billAmount: string }
  | { type: "SET_NUMBER_OF_PEOPLE"; numberOfPeople: string }
  | { type: "SET_TIP_PERCENTAGE"; tipPercentage: number };

const initialState = {
  billAmount: "",
  numberOfPeople: "1",
  selectedTip: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_BILL_AMOUNT":
      return { ...state, billAmount: action.billAmount };
    case "SET_NUMBER_OF_PEOPLE":
      return { ...state, numberOfPeople: action.numberOfPeople };
    case "SET_TIP_PERCENTAGE":
      return {
        ...state,
        selectedTip: action.tipPercentage,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBillChange = (value: string) => {
    dispatch({ type: "SET_BILL_AMOUNT", billAmount: value });
  };

  const handlePeopleChange = (value: string) => {
    dispatch({ type: "SET_NUMBER_OF_PEOPLE", numberOfPeople: value });
  };

  const handleTipChange = (value: number) => {
    dispatch({ type: "SET_TIP_PERCENTAGE", tipPercentage: value });
  };

  const handleCustomTipChange = (value: string) => {
    dispatch({
      type: "SET_TIP_PERCENTAGE",
      tipPercentage: Number(value),
    });
  };

  const handleReset = () => {
    handleTipChange(0);
    handleBillChange("");
    handlePeopleChange("1");
  };

  function calculateTip() {
    const amount = Number(state.billAmount);
    const people = Number(state.numberOfPeople);
    if (amount > 0 && people > 0 && state.selectedTip >= 0) {
      const calculatedTip = (amount * state.selectedTip) / 100 / people;
      const calculatedTotal = amount / people + calculatedTip;
      return { calculatedTip, calculatedTotal };
    }
    return { calculatedTip: "--", calculatedTotal: "--" };
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#c5e4e7] min-h-screen w-full">
      {/* Title of the page  */}
      <div className="flex flex-col items-center justify-center text-3xl font-bold tracking-[1rem] mt-5 font-space-mono">
        <span>SPLI</span>
        <span>TTER</span>
      </div>

      {/* Main container for tip calculator */}
      <div className="bg-white rounded-[35px] m-7 p-5 grid grid-cols-2 items-center justify-center gap-[66px] max-w-[1100px] w-full font-space-mono sm:grid-cols-1 sm:gap-[16px]">
        <TipInputSection
          billAmount={state.billAmount}
          handleBillChange={handleBillChange}
          numberOfPeople={state.numberOfPeople}
          handlePeopleChange={handlePeopleChange}
          selectedTip={state.selectedTip}
          handleTipChange={handleTipChange}
          handleCustomTipChange={handleCustomTipChange}
        />
        <TipDisplaySection
          totalValues={calculateTip()}
          handleReset={handleReset}
          resetEnabled={
            state.billAmount === "" &&
            state.numberOfPeople === "1" &&
            state.selectedTip === 0
          }
        />
      </div>
    </div>
  );
}

export default App;

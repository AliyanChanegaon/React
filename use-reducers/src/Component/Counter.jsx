import { useReducer, useState } from "react";

function reducerLogicToUpdateState(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + 1 };

    case "decrease":
      return { ...state, counter: state.counter - 1 };

    case "Reset":
      return { ...state, counter: 0 };

    case "Increasementbyval":
      return { ...state, counter: state.counter + action.payload };

    default:
      return state;
  }
}

const initValue = {
  counter: 0,
  key: "value"
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducerLogicToUpdateState, initValue);
  const [value, setValue] = useState(0);
  // Creating useReducer by giving a state and dispatch also a function
  // were state will be managed  in above its - reducerLogicToUpdateState
  // and an initial value - above 0;
  // const [count,setState]=useState(0);

  // const HandlingIncrement =()=>{
  //   setState(count+1);
  // }

  // const HandlingDecrement =()=>{
  //   setState(count-1);
  // }

  const incrementByValue = (amt) => {
    console.log(typeof Number(amt));
    return {
      type: "Increasementbyval",
      payload: Number(amt)
    };
  };

  return (
    <>
      <h1>Counter:{state.counter}</h1>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => dispatch({ type: "increase" })}>Add</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Reduce</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <br />

      <button onClick={() => dispatch(incrementByValue(value))}>
        Add by Value
      </button>
      <button onClick={() => dispatch(incrementByValue(-value))}>
        substract by Value
      </button>
    </>
  );
}

import { useReducer } from "react";

function Reducer(state: countType, action: ActionType) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count + action.payload };

    default:
      return state;
  }
}
type countType = {
  count: number;
};

type ActionType = {
  type: string;
  payload: number;
};

const intial = {
  count: 0
};
export default function ReduceFunc() {
  const [state, dispatch] = useReducer(Reducer, intial);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: -1 })}>
        Decrement
      </button>
    </>
  );
}

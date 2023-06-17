import { useReducer } from "react";
import { DEC, DIV, INC, MULT } from "./counter.action";

//3
/// mandotry initial state
const intial = {
  count: 0
};

export const CountReducer = (state = intial, { type, payload }) => {
  switch (type) {
    case INC:
      return { ...state, count: state.count + payload };

    case DEC:
      return { ...state, count: state.count - payload };

    case MULT:
      return { ...state, count: state.count * payload };

    case DIV:
      return { ...state, count: state.count / payload };

    default:
      return state;
  }
};

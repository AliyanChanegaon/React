// to manage actions that can be performed form any place in a single file
// 2
import { DEC, DIV, INC, MULT } from "./counter.action";

export const increment = (payload = 1) => ({ type: INC, payload });
export const decrement = (payload = 1) => ({ type: DEC, payload });
export const multiply = (payload = 1) => ({ type: MULT, payload });
export const divide = (payload = 1) => ({ type: DIV, payload });

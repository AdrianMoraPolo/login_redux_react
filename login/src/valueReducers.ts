import { TAction } from './actionTypes';

const initialState: number = 0;

export const valueReducers = (
  state: number = initialState,
  action: TAction
): number => {
 
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "RESET") {
    return initialState;
  }
  if (action.type === "COSA") {
    return state + 50;
  }
  return state;
};

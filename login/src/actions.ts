import { ActionCreator, Action } from "redux";
import { TAction } from './actionTypes';


export const updateNumber: ActionCreator<TAction> = () => ({
  type: "RESET"
});

export const masNumber: ActionCreator<TAction> = () => ({
  type: "INCREMENT"
});

export const menosNumber: ActionCreator<TAction> = () => ({
  type: "DECREMENT"
});

export const cosaNumber: ActionCreator<TAction> = () => ({
  type: "COSA"
});

export const setToken : ActionCreator <TAction> = (token: string) => ({
  type: "SET_TOKEN",
  token
})




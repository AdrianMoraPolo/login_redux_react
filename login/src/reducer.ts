import {combineReducers } from "redux";


import { valueReducers } from "./valueReducers";
import { tokenReducer } from './tokenReducer';

export interface IGlobalState {
    value: number,
    token: string
}


export const reducer = combineReducers<IGlobalState>({
    value: valueReducers,
    token: tokenReducer
});
import { Reducer } from "redux";
import { SetTokenAction, SET_TOKEN } from "./actions";

export type SetTokenActions = SetTokenAction;

export const tokenReducer:Reducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.token;
        default:
            return state;
    }
}
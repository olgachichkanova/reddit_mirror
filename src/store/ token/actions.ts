import { useEffect} from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export const SET_TOKEN = 'SET_TOKEN';

export type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}

export const setToken:ActionCreator<SetTokenAction> = (token) => ({
    type: SET_TOKEN,
    token,
});

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    useEffect(() => {
        const url = window.location.hash;
        if(url.indexOf('access_token') !== -1) {
            const access_token = url.split('=')[1].split('&')[0];
            dispatch(setToken(access_token))
        }
    }, [])
}
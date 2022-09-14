import { ActionCreator, AnyAction, Reducer } from "redux";
import { SetTokenAction, SET_TOKEN } from "./ token/actions";
import { tokenReducer } from "./ token/reducer";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
}

const initialState: RootState = {
    commentText: "",
    token: "",
    me: {
        loading: false,
        error: '',
        data: {},
    },
}
const UPDATE_COMMENT = 'UPDATE_COMMENT'
//const SET_TOKEN = 'SET_TOKEN'

export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}
export const updateComment:ActionCreator<UpdateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
});




export type MyAction = UpdateCommentAction 
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: tokenReducer(state.token, action),
            };
            case ME_REQUEST:
            case ME_REQUEST_SUCCESS:
            case ME_REQUEST_ERROR:
                return {
                    ...state,
                    me: meReducer(state.me, action)};
        default:
            return state;
    }  
}
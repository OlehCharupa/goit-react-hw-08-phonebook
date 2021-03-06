import { SET_ERROR, RESET_ERROR } from "../constants/index";

const initialState = ""

export const error = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return action.payload;
        case RESET_ERROR:
            return "";
        default:
            return state
    }
}
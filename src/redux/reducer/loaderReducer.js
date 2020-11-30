import { LOADER_ON, LOADER_OFF } from "../constants/index";

const initialState = false

export const loader = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_ON:
            return true;
        case LOADER_OFF:
            return false;
        default:
            return state
    }
}
import { combineReducers } from "redux";
import { phoneBookReducer } from "./phoneBookReducerTK"
import { filterReducerTK } from "./filterReducerTK"
import { isAlertReducer } from "./alertReducerTK"

export const rootReducerTK = combineReducers({
    items: phoneBookReducer,
    filter: filterReducerTK,
    isAlert: isAlertReducer
})

export const rootReducerToolKit = combineReducers({
    contacts: rootReducerTK
})
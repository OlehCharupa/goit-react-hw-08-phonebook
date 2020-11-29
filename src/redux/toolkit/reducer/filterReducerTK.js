import { createReducer } from "@reduxjs/toolkit"
import { EDIT_INPUT_FILTER, CLEAR_INPUT_FILTER } from "../../constants/index"

const initialState = ""

export const filterReducerTK = createReducer(initialState, {
    [EDIT_INPUT_FILTER]: (state, action) => action.payload,
    [CLEAR_INPUT_FILTER]: (state, action) => ""
})
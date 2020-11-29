import { createReducer } from "@reduxjs/toolkit"
import { ALERT_ON, ALERT_OFF } from "../../constants/index"

const initialState = false

export const isAlertReducer = createReducer(initialState, {
    [ALERT_ON]: (state, action) => true,
    [ALERT_OFF]: (state, action) => false
})
import { createAction } from "@reduxjs/toolkit"
import { EDIT_INPUT_FILTER, CLEAR_INPUT_FILTER } from "../../constants/index"

export const editInputFilterAction = createAction(EDIT_INPUT_FILTER)
export const clearInputFilterAction = createAction(CLEAR_INPUT_FILTER)
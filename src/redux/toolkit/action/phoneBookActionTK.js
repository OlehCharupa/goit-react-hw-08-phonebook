import { createAction } from "@reduxjs/toolkit"
import { ADD_CONTACT, DELETE_CONTACT, SET_LOCAL_STORAGE } from "../../constants/index"


export const addContactActionTK = createAction(ADD_CONTACT)
export const deleteContactActionTK = createAction(DELETE_CONTACT)
export const setContactLocalStorageActionTK = createAction(SET_LOCAL_STORAGE)


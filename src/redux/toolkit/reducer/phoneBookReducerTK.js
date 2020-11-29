import { createReducer } from "@reduxjs/toolkit";
import { ADD_CONTACT, DELETE_CONTACT, SET_LOCAL_STORAGE } from "../../constants/index";
import { v4 as uuidv4 } from 'uuid';

const initialState = []

export const phoneBookReducer = createReducer(initialState, {
    [SET_LOCAL_STORAGE]: (state, action) => [...action.payload],
    [ADD_CONTACT]: (state, action) => [...state, { ...action.payload, id: uuidv4() }],
    [DELETE_CONTACT]: (state, action) => state.filter(contact => contact.id !== action.payload)
})


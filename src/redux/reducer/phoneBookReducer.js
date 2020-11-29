import { ADD_CONTACT, DELETE_CONTACT, SET_LOCAL_STORAGE, SET_CONTACTS } from "../constants/index"
import { v4 as uuidv4 } from 'uuid';

const initialState = []

export const contacts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, { ...action.payload, id: uuidv4() }]
        case DELETE_CONTACT:
            return state.filter(contact => contact.id !== action.payload)
        case SET_LOCAL_STORAGE:
            return [...action.payload]
        case SET_CONTACTS:
            return action.payload
        default:
            return state;
    }
}


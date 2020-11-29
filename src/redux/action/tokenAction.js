import { SET_TOKEN, RESET_TOKEN } from "../constants/index"

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token
})

export const resetToken = () => ({
    type: RESET_TOKEN
})
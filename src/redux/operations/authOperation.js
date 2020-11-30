import axios from "axios"
import { setError, resetError } from '../action/errorAction';
import { loaderOff, loaderOn } from '../action/loaderAction';
import { setToken, resetToken } from "../action/tokenAction"

export const registerOperation = (userData) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios.post("https://goit-phonebook-api.herokuapp.com/users/signup", userData)
        dispatch(setToken(result.data.token))
    } catch (error) {
        dispatch(setError("Всё потом!"))
    } finally {
        dispatch(loaderOff())
    }
}

export const loginOperation = (userData) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios.post("https://goit-phonebook-api.herokuapp.com/users/login", userData)
        dispatch(setToken(result.data.token))
    } catch (error) {
        dispatch(setError("Всё потом!"))
    } finally {
        dispatch(loaderOff())
    }

}

export const logOut = (token) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        await axios({
            url: "https://goit-phonebook-api.herokuapp.com/users/logout",
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        dispatch(resetToken())
    } catch (error) {
        dispatch(setError(error))
    } finally {
        dispatch(loaderOff())

    }
}

axios({
    url: '',
    method: 'post',
    headers: {
        'content-type': 'application.json',
    }
})
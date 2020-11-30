import axios from "axios";
import { useSelector } from "react-redux";
import { setError, resetError } from "../action/errorAction";
import { loaderOn, loaderOff } from "../action/loaderAction";
import { setContactLocalStorage, deleteContact, setContacts } from "../action/phoneBookAction";


const options = {
    header: {
        'Contetn-Type': "application/json"
    }
}

export const getContactsOperation = (token) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios({
            url: 'https://goit-phonebook-api.herokuapp.com/contacts',
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        // console.log(result.data);
        dispatch(setContacts(result.data))
    } catch (error) {
        dispatch(setError("Что-то пошло не так. Попробуйте позже!"))
    } finally {
        dispatch(loaderOff())
    }
}

export const postContactsOperation = (contact, token) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios({
            url: 'https://goit-phonebook-api.herokuapp.com/contacts',
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: { ...contact },
        })
        // dispatch(setContacts(result.data))
        dispatch(getContactsOperation(token))
    } catch (error) {
        dispatch(setError("Что-то пошло не так. Попробуйте позже!"))
    } finally {
        dispatch(loaderOff())
    }
}

export const deleteContactOperation = (id, token) => async (dispatch) => {
    try {
        await axios({
            url: `https://goit-phonebook-api.herokuapp.com/contacts/${id}`,
            method: "delete",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(deleteContact(id))
        dispatch(getContactsOperation(token))
    } catch (error) {
        dispatch(setError("Что-то пошло не так. Попробуйте позже!"))
    } finally {
        dispatch(loaderOff())
    }
}
import axios from "axios";
import { setError, resetError } from "../action/errorAction";
import { loaderOn, loaderOff } from "../action/loaderAction";
import { setContactLocalStorage, deleteContact, setContacts } from "../action/phoneBookAction";

const options = {
    header: {
        'Contetn-Type': "application/json"
    }
}

export const getContactsOperation = () => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios.get('http://localhost:5000/contacts')
        dispatch(setContacts(result.data))
    } catch (error) {
        dispatch(setError("Что-то пошло не так. Попробуйте позже!"))
    } finally {
        dispatch(loaderOff())
    }
}

export const postContactsOperation = (contact) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        await axios.post('http://localhost:5000/contacts', contact, options)
    } catch (error) {
        dispatch(setError("Что-то пошло не так. Попробуйте позже!"))
    } finally {
        dispatch(loaderOff())
    }
}

export const deleteContactOperation = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5000/contacts/${id}`)
        dispatch(deleteContact(id))
    } catch (error) {
        dispatch(setError("Что-то пошло не так. Попробуйте позже!"))
    } finally {
        dispatch(loaderOff())
    }
}
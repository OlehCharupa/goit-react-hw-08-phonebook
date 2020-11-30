import { combineReducers } from "redux";
import { contacts } from "../reducer/phoneBookReducer"
import { filter } from "../reducer/filterReducer"
import { isAlert } from "../reducer/alertReducer"
import { loader } from "./loaderReducer"
import { error } from "./errorReducer"
import { token } from "./tokenReducer"
const contactsReduser = combineReducers({
    items: contacts,
    filter,
    isAlert,
    loader,
    error,
    // token
})
const rootReduser = combineReducers({ contacts: contactsReduser, token })


export default rootReduser
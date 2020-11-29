import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReduser from "./reducer/index"

const middleWares = [thunk]
const rootMiddleWares = applyMiddleware(...middleWares)
const store = createStore(rootReduser, composeWithDevTools(rootMiddleWares))

export default store
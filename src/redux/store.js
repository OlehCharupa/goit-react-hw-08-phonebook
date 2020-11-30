import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReduser from "./reducer/index"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const middleWares = [thunk]
const rootMiddleWares = applyMiddleware(...middleWares)
const compose = composeWithDevTools(rootMiddleWares)

const persistConfig = {
    key: 'test',
    storage,
    whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, rootReduser);
const store = createStore(persistedReducer, compose);
export const persistor = persistStore(store)


export default store
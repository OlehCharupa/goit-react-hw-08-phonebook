import { configureStore } from "@reduxjs/toolkit";
import { rootReducerToolKit } from "./reducer/indexReducerTK"

const store = configureStore({

    reducer: rootReducerToolKit
})

export default store
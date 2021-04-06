import {combineReducers, createStore} from "redux";
import {reducerCounter} from "./reducerCounter";


const rootReducer = combineReducers({
    reducerCounter
})

export type RootReducer = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
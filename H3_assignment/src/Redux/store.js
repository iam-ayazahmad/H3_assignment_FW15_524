import {legacy_createStore as createstore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { currencyReducer } from "./reducer"


export const store=createstore(currencyReducer,applyMiddleware(thunk))
import { loadingBarReducer } from "react-redux-loading-bar"
import {combineReducers} from "redux"
import userReducer from "./userReducer"

export default combineReducers ({
    user : userReducer,
    loadingBar: loadingBarReducer,

})
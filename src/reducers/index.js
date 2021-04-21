import { loadingBarReducer } from "react-redux-loading-bar"
import {combineReducers} from "redux"
import courseReducer from "./courseReducer"
import coursesReducer from "./coursesReducer"
import userReducer from "./userReducer"

export default combineReducers ({
    user : userReducer,
    loadingBar: loadingBarReducer,
    courses:coursesReducer,
    course:courseReducer

})
import { combineReducers } from "redux";
import conunterReducer from "./counterReducer";



const reducers=combineReducers(
    {
        conunterReducer
    }
)

export default reducers
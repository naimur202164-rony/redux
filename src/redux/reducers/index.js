import { combineReducers } from "redux";
import conunterReducer from "./counterReducer";



const reducers=combineReducers(
    {
        counter:conunterReducer
    }
)

export default reducers
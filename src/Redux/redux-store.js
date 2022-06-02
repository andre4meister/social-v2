import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";

let reducers = combineReducers([
     authReducer,
]);
const store = createStore(reducers);
export default store;
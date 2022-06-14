import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
     auth:authReducer,
     profile: profileReducer,
     users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
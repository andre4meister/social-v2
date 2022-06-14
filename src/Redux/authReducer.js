import {authAPI} from "../API/api";

const SET_USER_DATA ='SET_USER_DATA';

const initialState = {
        userId: null,
        login: null,
        isAuth: false,
        email: null,
}
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}


export const setUserData = (userId, email,login, isAuth) => ({type:SET_USER_DATA, payload: {userId, email,login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.auth()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}
export const login = (email,password, rememberMe = false, captcha = '') => async (dispatch) => {
    debugger
    let response = await authAPI.login(email,password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
        alert('loginSuccess')
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null,null, false));
        alert('logoutSuccess');
    }
}




export default authReducer;
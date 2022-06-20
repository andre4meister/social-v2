import {authAPI} from "../API/api";

const SET_USER_DATA ='SET_USER_DATA';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';

const initialState = {
        userId: null,
        login: null,
        isAuth: false,
        email: null,
        isFetching: true,
}
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}


export const setUserData = (userId, email,login, isAuth) => ({type:SET_USER_DATA, payload: {userId, email,login, isAuth}});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.auth();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
    dispatch(toggleIsFetching(false))
}
export const login = (email,password, rememberMe = false, captcha = '') => async (dispatch) => {
    let response = await authAPI.login(email,password, rememberMe, captcha);
    console.log(response);
    switch (response.data.resultCode) {
        case 0: {
            dispatch(getAuthUserData());
            break
        }
        case 1: {
            alert('resultCode 1')
            console.log(response)
            break
        }
        default: {
            alert('resultCode ne 1 i ne 0')
            console.log(response)
        }

    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null,null, false));
    }
}




export default authReducer;
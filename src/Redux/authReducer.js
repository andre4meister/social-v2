import {authAPI} from "../API/api";

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER_DATA ='SET_USER_DATA';

const initialState = {
    auth: {
        userId: null,
        login: null,
        isAuth: false,
        email: null,
    }
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

// export const loginSuccess = ({email,password, rememberMe, captcha}) => ({type:LOGIN, payload: {email,password, rememberMe, captcha}});
// export const logoutSuccess = ({userId, email,login}) => ({type:LOGOUT, payload: {email,password, rememberMe, isAuth: false}});
export const setUserData = (userId, email,login, isAuth) => ({type:SET_USER_DATA, payload: {userId, email,login, isAuth}});

// export const getUserData = () => async (dispatch) => {
//         let response = await authAPI.auth();
//         console.log(response);
//         if (response.data.resultCode === 0) {
//             alert('gd')
//             let {id, email, login} = response.data.data;
//             dispatch(setUserData(id, email, login, true));
//         }
// }
export const getUserData = () => async (dispatch) => {
    let response = await authAPI.auth()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}




export default authReducer;
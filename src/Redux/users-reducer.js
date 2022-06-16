import {usersAPI} from "../API/api";

const FOLLOW ='FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';
const SET_TOTAL_COUNT ='SET_TOTAL_COUNT';


const initialState = {
    users: [],
    currentPage: 1,
    count: 5,
    totalCount: 0,
    isFetching: false,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state}
        }
        case UNFOLLOW: {
            return {...state}
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        default: {
            return state
        }
    }
}

const setUsersSuccess = (users) => ({type: SET_USERS, users});
const setTotalCountSuccess = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});


export const setUsers = (currentPage, count) => async (dispatch) =>{
  let response = await usersAPI.getUsers(currentPage, count);
  dispatch(setUsersSuccess(response.data.items));
  dispatch(setTotalCountSuccess(response.data.totalCount));
}



export default usersReducer;
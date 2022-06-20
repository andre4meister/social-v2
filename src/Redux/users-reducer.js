import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FRIENDS = 'SET_FRIENDS';


const initialState = {
    users: [],
    bestFriends: [],
    currentPage: 1,
    count: 5,
    totalCount: 0,
    isFetching: false,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(obj => {
                    if (obj.id === action.userId) {
                        return {...obj, followed: true}
                    }
                    return obj;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(obj => {
                    if (obj.id === action.userId) {
                        return {...obj, followed: false}
                    }
                    return obj;
                })
            }
        }
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
        //     }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_FRIENDS: {
            return {...state, bestFriends: action.friends}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default: {
            return state
        }
    }
}

const setUsersSuccess = (users) => ({type: SET_USERS, users});
const setFriendsSuccess = (friends) => ({type: SET_FRIENDS, friends});
const setTotalCountSuccess = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
const followSuccess = (userId) => ({type: FOLLOW, userId})
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setCurrentPageSuccess = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});


export const setUsers = (currentPage, count, friend, sidebar) => async (dispatch) => {
    let response = await usersAPI.getUsers(currentPage, count, friend);
    if (sidebar) {
        dispatch(setFriendsSuccess(response.data.items))
    } else {
        dispatch(setUsersSuccess(response.data.items));
        dispatch(setTotalCountSuccess(response.data.totalCount));
    }

}

export const follow = (userId) => async (dispatch) => {
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
}
export const unfollow = (userId) => async (dispatch) => {
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
}
export default usersReducer;
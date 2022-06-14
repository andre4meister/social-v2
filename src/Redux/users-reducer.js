const FOLLOW ='FOLLOW';
const UNFOLLOW ='UNFOLLOW';


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
        default: {
            return state
        }
    }
}
export default usersReducer;
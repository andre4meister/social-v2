import {profileAPI} from "../API/api";

const GET_USER_PROFILE ='GET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';

const initialState = {
    posts: [
        {id: 0, text: 'Hello', time: '4 hours ago', imgUrl: 'https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-neuschwanstein-castle-bavaria.jpg', likes: 53},
        {id: 1, text: 'I learn js',  time: '9 hours ago', imgUrl: 'https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-black-forest.jpg', likes: 53},
        {id: 2, text: 'And you?',  time: '2 days ago', imgUrl: 'https://pbs.twimg.com/media/FPbMRFmWQAUO5ic.jpg', likes: 53},
        {id: 3, text: 'Good',  time: '5 month ago', imgUrl: 'https://globalgrasshopper.com/wp-content/uploads/2013/09/Most-beautiful-places-to-visit-in-Switzerland.jpg', likes: 53},
        {id: 4, text: 'Bye',  time: '1 year ago', imgUrl: 'https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-wimbachklamm-gorge.jpg', likes: 53},
    ],
    followers: 195,
    following: 187,
    status: null,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE: {
            return {...state, data: {...action.payload}}
        }
        case GET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export const getUserStatusSuccess = (status) => ({ type: GET_USER_STATUS, status });
export const getUserProfileSuccess = (payload) => ({ type: GET_USER_PROFILE, payload});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(getUserProfileSuccess(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(getUserStatusSuccess(response.data));
}

export default ProfileReducer;
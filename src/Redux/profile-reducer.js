import {photoAPI, profileAPI} from "../API/api";

const GET_USER_PROFILE ='GET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';
const CREATE_NEW_POST = 'CREATE_NEW_POST';
const DELETE_POST = 'DELETE_POST';


const initialState = {
    posts: [
        {id: 6426, text: 'Hello', time: '4 hours ago', imgUrl: 'https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-neuschwanstein-castle-bavaria.jpg', likes: 53},
        {id: 6262, text: 'I learn js',  time: '9 hours ago', imgUrl: 'https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-black-forest.jpg', likes: 53},
        {id: 2626, text: 'And you?',  time: '2 days ago', imgUrl: 'https://pbs.twimg.com/media/FPbMRFmWQAUO5ic.jpg', likes: 53},
        {id: 2453, text: 'Good',  time: '5 month ago', imgUrl: 'https://globalgrasshopper.com/wp-content/uploads/2013/09/Most-beautiful-places-to-visit-in-Switzerland.jpg', likes: 53},
        {id: 6463, text: 'Bye',  time: '1 year ago', imgUrl: 'https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-wimbachklamm-gorge.jpg', likes: 53},
    ],
    followers: 195,
    following: 187,
    status: null,
    data: null,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE: {
            return {...state, data: {...action.payload}}
        }
        case GET_USER_STATUS: {
            return {...state, status: action.status}
        }
        case CREATE_NEW_POST: {
            return {...state, posts: [action.newPost, ...state.posts]}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter( p => p.id !== action.postId)}
        }
        default:
            return state;
    }
}
export const getUserStatusSuccess = (status) => ({ type: GET_USER_STATUS, status });
export const getUserProfileSuccess = (payload) => ({ type: GET_USER_PROFILE, payload});
export const createNewPostSuccess = (newPost) => ({type: CREATE_NEW_POST, newPost});
export const deletePostSuccess = (postId) => ({type: DELETE_POST, postId});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(getUserProfileSuccess(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(getUserStatusSuccess(response.data));
}
export const uploadPostPhoto = (file, id, text, time, likes) => async (dispatch) => {
    const formData = new FormData();
    const lastFile = formData.append('lastFile', file);
    let response = await photoAPI.uploadPhoto(lastFile);
    if (response.status_code === 200) {
        dispatch(createNewPostSuccess({id: 6589, text, time, imgUrl: response.image.url, likes}));
    }
    else {
        alert('error')
    }
    console.log(response)
}

export default ProfileReducer;
import {photoAPI, profileAPI} from "../API/api";

const GET_USER_PROFILE ='GET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';
const CREATE_NEW_POST = 'CREATE_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const UPLOADING_POST_PHOTO_TOGGLE = 'UPLOADING_POST_PHOTO_TOGGLE'


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
    isFetchingPostPhoto: false,
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
        case UPLOADING_POST_PHOTO_TOGGLE: {
            return {...state, uploadingPostPhoto: action.uploadingPostPhotoStatus}
        }
        default:
            return state;
    }
}
export const getUserStatusSuccess = (status) => ({ type: GET_USER_STATUS, status });
export const getUserProfileSuccess = (payload) => ({ type: GET_USER_PROFILE, payload});
export const createNewPostSuccess = (newPost) => ({type: CREATE_NEW_POST, newPost});
export const deletePostSuccess = (postId) => ({type: DELETE_POST, postId});
export const uploadingPostPhotoToggle = (uploadingPostPhotoStatus) => ({type: UPLOADING_POST_PHOTO_TOGGLE, uploadingPostPhotoStatus});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(getUserProfileSuccess(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(getUserStatusSuccess(response.data));
}
export const uploadPostPhoto = ( randomId, text, time, likes) => async (dispatch) => {
    dispatch(uploadingPostPhotoToggle(true))
    let response = await photoAPI.getPhoto(randomId);

    if (response.status === 200) {
        dispatch(createNewPostSuccess({randomId, text, time, imgUrl: response.data[0].url, likes}));
        dispatch(uploadingPostPhotoToggle(false))
    } else {
        alert('Some error occurred')
    }
}
export const updateProfileInfo = (objInfo) => async (dispatch, getState) => {
    let response = await profileAPI.updateProfileInfo(objInfo);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.userId));
    }
}
export const updateStatus = (status) => async (dispatch,getState) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(getUserStatus(getState().auth.userId));
    }
}
export const updateProfilePhoto = (objPhoto) => async (dispatch, getState) => {
    const file = new FormData();
    file.append("myFile", objPhoto);
    let response = await profileAPI.updateProfilePhoto(file);
    console.log(response, response.resultCode)
    if ( response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.userId));
    } else alert('something bad')
}

export default ProfileReducer;
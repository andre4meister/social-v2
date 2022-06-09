
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
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default ProfileReducer;
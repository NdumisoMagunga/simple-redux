import { combineReducers } from 'redux';

import photosReducer from './photosReducer';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers ({
    photos: photosReducer,
    posts: postsReducer,
    users: usersReducer,
});
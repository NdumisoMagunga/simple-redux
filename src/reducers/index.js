import { combineReducers } from 'redux';

import photosReducer from './photosReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';


export default combineReducers ({
    photos: photosReducer,
    users: usersReducer,
    posts: postsReducer,
    
});
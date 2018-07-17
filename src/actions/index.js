import {
FETCH_PHOTOS,
FETCH_POSTS,
FETCH_USERS
 } from './types';

export const fetchPhotos = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    dispatch({type: FETCH_PHOTOS, payload: data});
};

export const fetchPosts = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({type: FETCH_POSTS, payload: data});
};


export const fetchUsers = () => async dispatch => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();
   dispatch({type: FETCH_USERS, payload: data});
};


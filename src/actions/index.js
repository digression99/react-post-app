import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const API_KEY = 'lknsdfnsdiofnwer';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {

    const url = `${ROOT_URL}/posts?key=${API_KEY}`;
    const request = axios.get(url);

    return {
        type : FETCH_POSTS,
        payload : request
    };
}

export function createPost (values) {

}
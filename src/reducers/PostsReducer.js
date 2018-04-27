import {FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST} from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('data is : ');
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            // const post = action.payload.data;
            // let newState = { ...state};
            // newState[post.id] = post;
            // return newState;
            // return action.payload.data;

            return {
                ...state,
                [action.payload.data.id] : action.payload.data
            };

        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
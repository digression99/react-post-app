import {FETCH_POSTS} from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('data is : ');
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
import {combineReducers} from 'redux';
import PostsReducer from './PostsReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    posts : PostsReducer,
    form : formReducer
    // state: (state = {}) => state,
});

export default rootReducer;

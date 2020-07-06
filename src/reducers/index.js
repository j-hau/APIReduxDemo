import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

//simply combining the reducers
export default combineReducers({
    posts: postsReducer
});
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

/*simply combining the reducers
So here we are importing the default export of postsReducer.js
This will return the action.payload based on action.state.
We are then importing that into our combined reducer and assigning it
the identifier "posts" to "postsReducer" which is imported */
export default combineReducers({
    posts: postsReducer
});
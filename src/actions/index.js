import jsonPlaceholder from '../apis/jsonPlaceholder';

{/* We are importing the json placeholder.  We want to do a get request
    from the base URL to "/posts".  We use an async function as API
    calls may not immediately return values.  We need to use middleware so it can wait for the 
    data to be sent back from the API call.
    We dispatch the action that saves the response of the API call to /posts
    and then dispatches it to FETCH_POSTS with the payload being the result.
    */
}

export const fetchPosts = () => async dispatch => {

        const response = await jsonPlaceholder.get("/posts");
        /*when we dispatch below, a copy of the dispatch request goes to all the reducers defined in the combinedReducers bit
        so it then is passed off into the original reducers to be acted on */
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };
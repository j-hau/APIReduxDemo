/*Here we have our simple reducer for the posts which on first call
will initialise the state variable to an empty array.
It takes an action object and depending on the type, returns something else 
Specifically, based on the type of the action, it returns the payload*/

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS': return action.payload;
        default: return state;

    }
}
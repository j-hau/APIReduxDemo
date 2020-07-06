import React from 'react';
import PostList from './PostList'

//Simple app boilerplate to call post list which will render the posts
const App = () => {

    return (
        <div className = 'ui container'> 
            <PostList />
        </div>
    )
}

export default App;
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

{/* This simply is a react component that when mounted on the screen
    Calls this.props.fetchPosts which will retrieve the post list
    */
}

class PostList extends React.Component{
    componentDidMount() {
        this.props.fetchPosts();
    }
    /* ComponentDidMount will run everytime the component PostList mounts.
    
    Render list is used as the logic function to take the posts data returned by the API call,
    it will then map it to identifier post, and display the title and body individually inside a div to be
    rendered on the app
    */

    renderList(){
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large icon"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            );
        });

    }
    /* simply rendering the list inside the render function */

    render () {
        return <div>{this.renderList()}</div>
    }
}

/*this is our mapping function that as described, takes the state object and maps it to the posts using the identifier
"posts" as defined in our reducer
Specifically, as we imported postsReducer.js to /reducers/index.js
We then assigned it to "posts".  Here we are taking the state from the action creator passed to us
And then assigning it to posts to be passed in connecting the middleware and the function*/
const mapStateToProps = (state) => {
    return { posts: state.posts}

}

/* we are exporting default the function that maps the state object to posts, and the function that retrieves the posts via API call */
export default connect(mapStateToProps, { fetchPosts })(PostList);
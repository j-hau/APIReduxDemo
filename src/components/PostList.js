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

    render () {
        return <div>Post List</div>
    }
}

export default connect(null, { fetchPosts })(PostList);
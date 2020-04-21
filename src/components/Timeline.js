import React, { Component } from 'react'
import Post from './Post'

export class Timeline extends Component {
    getPostComments = (postId) => {
        return this.props.comments.filter((comment) => {
            return comment.postId === postId
        });
    }

    render() {
        const { posts } = this.props;
    
        const postItems = posts.map(post => {
            return (
                <Post key={post.id} post={post} comments={this.getPostComments(post.id)}/>
            )
        })

        return <div>{postItems}</div>
    }
}

export default Timeline

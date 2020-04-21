import React from 'react'
import Post from './Post'

const Timeline = (props) => {
    const { comments, posts } = props;

    const getPostComments = (postId) => {
        return comments.filter((comment) => {
            return comment.postId === postId
        });
    }

    const postItems = posts.map(post => {
        return (
            <Post key={post.id} post={post} comments={getPostComments(post.id)}/>
        )
    })

    return <div>{postItems}</div>
}

export default Timeline

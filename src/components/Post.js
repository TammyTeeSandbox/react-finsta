import React from 'react'

const Post = (props) => {
    const { comments, post } = props;

    const postComments = comments.map(comment => {
        return <li key={comment.id}>{ comment.name }</li>
    })

    return (
        <div>
            <div className="">
                <img src="//dummyimage.com/100/c/a" alt={post.title}/>
                <p>{ post.title }</p>
                <p>Comments:</p>
                <ul>{ postComments }</ul>
            </div>
        </div>
    )
}

export default Post

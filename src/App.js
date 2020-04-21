import React, { useEffect, useState } from 'react';
import Timeline from './components/Timeline';

const App = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments/')
      .then(response => response.json())
      .then(json => {
        setComments(json)
      })
  })

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        setPosts(json)
      })
  })

  return <Timeline comments={comments} posts={posts} />
}

export default App;

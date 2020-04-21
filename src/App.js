import React, { Component } from 'react';
import Timeline from './components/Timeline'

class App extends Component {
  state = {
    comments: [],
    posts: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json
        })
      })

    fetch('https://jsonplaceholder.typicode.com/comments/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments: json
        })
      })
  }

  render() {
    return <Timeline comments={this.state.comments} posts={this.state.posts} />
  }
}

export default App;

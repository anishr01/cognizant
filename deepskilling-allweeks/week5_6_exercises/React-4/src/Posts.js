import React, { Component } from 'react'
import Post from './Post.js'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      error: null,
    }
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load posts')
        }

        return response.json()
      })
      .then((posts) => {
        const mappedPosts = posts.map(
          (post) => new Post(post.id, post.title, post.body),
        )

        this.setState({ posts: mappedPosts })
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  componentDidMount() {
    this.loadPosts()
  }

  componentDidCatch(error, info) {
    alert(error.message)
  }

  render() {
    const { posts, error } = this.state

    if (error) {
      return React.createElement(
        'p',
        { className: 'error-message' },
        'Unable to load posts.',
      )
    }

    return React.createElement(
      'section',
      { className: 'posts-card' },
      React.createElement('h1', null, 'Posts'),
      React.createElement(
        'div',
        { className: 'posts-list' },
        ...posts.map((post) =>
          React.createElement(
            'article',
            { key: post.id, className: 'post-item' },
            React.createElement('h2', null, post.title),
            React.createElement('p', null, post.body),
          ),
        ),
      ),
    )
  }
}

export default Posts
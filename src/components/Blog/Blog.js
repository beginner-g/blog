import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
import './blog.css'

class Blog extends Component {
  render () {
    return (
      <Router>
        <div className='blog'>
          <Layout>
            <Main />
          </Layout>
        </div>
      </Router>
    )
  }
}

export default Blog

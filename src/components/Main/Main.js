import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import MyHome from '../MyHome/MyHome'
import Follow from '../Follow/Follow'
import './main.css'
class Main extends Component {
  render () {
    return (
      <div className='main'>
        <Route path='/' component={MyHome} exact />
        <Route path='/follow' component={Follow} />
      </div>
    )
  }
}

export default Main

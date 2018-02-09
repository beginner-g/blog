import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './sportsCareer.css'
class SportsCareer extends Component {
  render () {
    return (
      <div className='sports-career'>
        <Link to='/'>SportsCareer</Link>
      </div>
    )
  }
}

export default SportsCareer

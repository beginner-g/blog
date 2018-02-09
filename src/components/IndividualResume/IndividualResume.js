import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './individualResume.css'
class IndividualResume extends Component {
  render () {
    return (
      <div className='individual-resume'>
        <Link to='/'>IndividualResume</Link>
      </div>
    )
  }
}

export default IndividualResume

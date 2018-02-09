import React, { Component } from 'react'

import IndividualResume from '../IndividualResume/IndividualResume'
import SportsCareer from '../SportsCareer/SportsCareer'

import './myhome.css'

class MyHome extends Component {
  render () {
    return (
      <div className='myhome'>
        <IndividualResume />
        <SportsCareer />
      </div>
    )
  }
}

export default MyHome

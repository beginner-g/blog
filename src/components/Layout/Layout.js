import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Home from '../../images/home.svg'
import Follow from '../../images/follow.svg'
class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <header>
          <img src='https://avatars1.githubusercontent.com/u/29394733?s=400&u=3978ee94743bf7ea0284887fb75b3783a4a90703&v=4' alt='' />
          <h2>Beginner</h2>
        </header>
        {this.props.children}
        <footer>
          <Link to='/' className='homeIcon'><img src={Home} alt='' /><br /><span>主页</span></Link>
          <Link to='/follow' className='followIcon'><img src={Follow} alt='' /><br /><span>关注</span></Link>
        </footer>
      </div>
    )
  }
}

export default Layout

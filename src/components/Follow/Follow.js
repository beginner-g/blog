import React, { Component } from 'react'

import Wechart from '../../images/weixin.svg'
import Wecharts from '../../images/beginner.jpeg'
import './follow.css'
class Follow extends Component {
  render () {
    return (
      <div className='follow'>
        <p className='follow-title'>
          <span>想关注我的，可以打开微信扫一扫加我哦</span>
          <img src={Wechart} alt='' />
        </p>
        <p className='follow-content'>
          <img src={Wecharts} alt='' />
        </p>
      </div>
    )
  }
}

export default Follow

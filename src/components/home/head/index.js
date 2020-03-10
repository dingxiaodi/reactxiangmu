import React, { Component } from 'react'
import './index.less'
import {SearchOutlined} from '@ant-design/icons';
export default class Head extends Component {
  render() {
    return (
      <div className='head'>
        <div className='logo'>
          <img src="https://nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100" alt=""/>
          </div>
        <div className='appc'>App查看</div>
        <div className='search'><SearchOutlined style={{fontSize:'0.33333rem',color:'#999'}}/></div>
      </div>
    )
  }
}

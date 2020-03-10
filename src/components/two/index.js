import React, { Component } from 'react'
import './index.less'
import { Button } from 'antd';
export default class Two extends Component {
  render() {
    return (
      <div className='two-course'>
        <img src="//swap.stu.126.net/res/images/wap/common/newBlank.png?7b6c25677a53976b44f4d028d9dc761f" alt=""/>
        <div className='two-btn'>
        <p>未学习微专业呦~</p>
        <Button style={{background:'#2cc17b',color:'#fff'}}>我的微课程</Button>
        </div>
      </div>
    )
  }
}

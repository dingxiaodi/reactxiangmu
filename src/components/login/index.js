import React, { Component } from 'react'
import './index.less'
export default class Login extends Component {
  render() {
    return (
      <div className='login'>
         <div className='login-main'>
            <img src="//edu-image.nosdn.127.net/c26ea87a-f364-4b52-97d0-dce9851d7761.png?imageView&quality=100" alt=""/>
            <a href="/login/myuser">手机号登录</a>
            <a href="/login/register">手机号注册</a>
         </div>
      </div>
    )
  }
}

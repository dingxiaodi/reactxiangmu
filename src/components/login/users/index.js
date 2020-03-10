import React, { Component } from 'react'
import { Input } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Button,message} from 'antd';
import {setUser} from '../../../api/request'
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      
    }
  }
 input=(e)=>{
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value,
});
 }
 submit(username,password){
  setUser(username,password).then((res)=>{
      if(res.status===200){
        message.info('登陆成功')
      this.props.history.push('/home')
      sessionStorage.setItem('username', username)
      }
      
  })
 }
  render() {
    const {username,password} = this.state
    return (
      <div>
        <Input size="large" placeholder="请输入手机号"  prefix={<UserOutlined />} value={username} onChange={this.input} name='username' style={{width:'250px',marginLeft:'40px',marginTop:'140px'}} />
        <Input size="large" placeholder="请输入密码"  prefix={<LockOutlined />} value={password} onChange={this.input} name='password' style={{width:'250px',marginLeft:'40px',marginTop:'20px'}} type='password'/>
        <Button type="primary" size='large' onClick={this.submit.bind(this,username,password)} style={{width:'250px',marginLeft:'40px',marginTop:'20px',color:'#fff',background:'#2CC17B'}}>登录</Button>
      </div>
    )
  }
}

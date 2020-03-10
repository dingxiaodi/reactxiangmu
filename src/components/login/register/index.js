import React, { Component } from 'react'
import { Input } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Button,message} from 'antd';
import {getUser} from '../../../api/request'
export default class Register extends Component {
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
  getUser(username,password).then((res)=>{
      console.log(res.data)
      if(res.status === 201){
        message.info('注册成功');
        this.props.history.push('/login/myuser')
      }
  })
 }
  render() {
    const {username,password} = this.state
    return (
      <div>
        <Input size="large" placeholder="请输入手机号"  prefix={<UserOutlined />} value={username} onChange={this.input} name='username' style={{width:'250px',marginLeft:'40px',marginTop:'140px'}} />
        <Input size="large" placeholder="请输入密码"  prefix={<LockOutlined />} value={password} onChange={this.input} name='password' style={{width:'250px',marginLeft:'40px',marginTop:'20px'}} type='password' />
        <Button type="primary" size='large' onClick={this.submit.bind(this,username,password)} style={{width:'250px',marginLeft:'40px',marginTop:'20px',color:'#fff',background:'#2CC17B'}}>注册</Button>
      </div>
    )
  }
}

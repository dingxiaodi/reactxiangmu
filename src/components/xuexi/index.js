import React, { Component } from 'react'
import { Avatar,List,Button } from 'antd';
import { UserOutlined,RightOutlined,AccountBookOutlined,PayCircleOutlined,ShoppingCartOutlined,CreditCardOutlined,BranchesOutlined } from '@ant-design/icons';
import './index.less'
import {NavLink} from 'react-router-dom'
const data = [
  {
    title: '我的订单',
    icon: <PayCircleOutlined />
  },
  {
    title: '我的优惠券',
    icon: <AccountBookOutlined />
  },
  {
    title: '我的购物车',
    icon: <ShoppingCartOutlined />
  },
  {
    title: '我的学习卡',
    icon: <CreditCardOutlined />
  },
  {
    title: '分享赚学费',
    icon: <BranchesOutlined />
  },
];
export default class Xuexi extends Component {
  constructor(props){
    super(props)
    this.state={
      isLogin:false
    }
  }
  btn=()=>{
   
    sessionStorage.clear();
  }
  render() {
    return (
      <div>
        <NavLink className='avatar' to='/login'>
        <Avatar size="large" icon={<UserOutlined/>} /><span className='span'>你好:{sessionStorage.getItem("username")}</span> <span className='danger'><Button danger size='small' onClick={this.btn}>退出</Button></span>
      </NavLink>
      <List
        className='mylist'
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item className='li'>
            {item.icon}
            <List.Item.Meta
               className='mylist'
              title={<a href="https://study.163.com">{item.title}</a>}
            /><RightOutlined className='myleft'/>
          </List.Item>
        )}
      />

        
         
      </div>
    )
  }
}

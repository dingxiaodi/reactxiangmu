import React, { Component } from 'react'
import { Button,Badge  } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import './index.less'
import {connect} from 'react-redux';

import actionCreator from '../one/actionCreator'
 class ShopList extends Component {
   
  componentDidMount(){
    var id = this.props.match.params.id
    this.props.getCarList(id)
    
  }
  
  butt=()=>{
    this.props.history.push('/mystudy')
  }
  render() {
   console.log(this.props)
   let {addAction:add}=this.props;
    return (
      <div className='study'>
         <img src={this.props.shopList.xlist.largePictureUrl} alt=""/>
        <div className='title'>{this.props.shopList.xlist.name}</div>
        <div className='price'>￥{this.props.shopList.xlist.discountPrice}</div>
        <div className='bai'></div>
        <div className='couise'>
          <div className='tit'>课程介绍</div>
          <p>{this.props.shopList.xlist.description}</p>
        </div>
        <div className='btn'>
        <Badge count={this.props.carList.a}>
        <Button type="primary" danger icon={<HeartOutlined />} style={{marginTop:'5px',marginLeft:'5px'}} onClick={this.butt}>购物车商品</Button>
        </Badge>
        <Button type="primary" danger icon={<HeartOutlined />} className='collect' onClick={add.bind(this,{...this.props.shopList.xlist})}>
          加入学习
        </Button>
        </div>
      </div>
    )
  }
}

export default connect((state)=>state,actionCreator)(ShopList)

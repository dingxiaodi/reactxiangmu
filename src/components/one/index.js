import React, { Component } from 'react'
import { Button } from 'antd';
import './index.less'
import { HeartOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import actionCreator from './actionCreator'


 class One extends Component {
   skip=()=>{
     this.props.history.push('/home')
   }
  render() {
    
    
    let {dec,inc,allCount,allMoney} = this.props
    return (
      <div>
        {this.props.clist.length>0?
        <div>
          
        <ul className='pricel'>
        {
          this.props.clist.map((item)=>{
            
            return <li key={item.id} className='carlist'>
                     <img src={item.largePictureUrl} alt="" style={{width:'60px',height:'60px'}}/>
                     <div className='jin'>
                        <div>{item.providerName}</div>
                        <div>￥{item.discountPrice}</div>
                     </div>
                     <div className='bttn'>
                       <Button onClick={dec.bind(this,item.id)}>-</Button>
                       {item.count}
                       <Button onClick={inc.bind(this,item.id)}>+</Button>
                     </div>
            </li>
          })
        }
        
        </ul>
        <div className='close'>
        <span style={{paddingRight:'20px'}}>总数 {allCount()} </span>  <span style={{paddingRight:'50px'}}>应付 {allMoney()}元</span> <span><Button type="primary" danger icon={<HeartOutlined />}>去结算</Button></span>
        </div>
        </div>:

        <div className='two-course'>
        <img src="//swap.stu.126.net/res/images/wap/common/newBlank.png?7b6c25677a53976b44f4d028d9dc761f" alt=""/>
        <div className='two-btn'>
        <p>未开始学习呦~</p>
        <Button style={{background:'#2cc17b',color:'#fff'}} onClick={this.skip}>去发现课程</Button>
        </div>
      </div>}
      </div>
    )
  }
}
var mapState=(state)=>{
  return {
    clist:state.carList.clist,
    
      allCount(){ //总的数量
          var s =0;
           state.carList.clist.forEach((item)=>{
              s+=item.count;
           })
           return s;
      },
      allMoney(){  //总的金额
          var s =0;
          state.carList.clist.forEach((item)=>{
              s+=item.count*item.discountPrice;
           })
           return s;
      }

  }
}
export default connect(mapState,actionCreator)(One)

import React, { Component } from 'react'
import Head from './head'
import MySwiper from'./Myswiper'
import Iconlist from './iconlist'
import List from './list'
import {getSwiper} from '../../api/request'
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      bannerList:[]
    }
  }
  componentDidMount(){
    this.getData();
  }
  getData=()=>{
    getSwiper().then((res)=>{
      
      this.setState({
        bannerList:res.data[0]
      })
   })
  }
  render() {
    
    return (
      <div>
        <Head/>
        {this.state.bannerList.length>0?
        <MySwiper list={this.state.bannerList} />:""}
        <Iconlist/>
        <List/>>
      </div>
    )
  }
}

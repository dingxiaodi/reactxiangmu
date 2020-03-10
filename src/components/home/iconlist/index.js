import React, { Component } from 'react'
import {getIcon} from '../../../api/request'
import './index.less'
export default class Iconlist extends Component {
  constructor(props){
    super(props);
    this.state={
      iconlist:[]
    }
  }
  componentDidMount(){
    this.getIconList()
  }
  getIconList=()=>{
    getIcon().then((res)=>{
      
       this.setState({
        iconlist:res.data
       })
    })
  }
  render() {
    return (
      <div className='list'>
        <ul className='iconlist'>
          {
            this.state.iconlist.map((item,index)=>{
            return <li key={index}>
              <a href={item.targetTo} >
              <img src={item.photoUrl} alt=''/><span>{item.name}</span>
              </a>
              </li>
              
            })
          }
        </ul>
      </div>
    )
  }
}

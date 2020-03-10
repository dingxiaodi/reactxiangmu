import React, { Component } from 'react'
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import './index.less'

export default class MySwiper extends Component {
  componentDidMount(){
    new Swiper ('.swiper-container', {
     loop: true, 
       autoplay: {
             delay: 3000,
             disableOnInteraction: false,
     
     },
     // 如果需要分页器
     pagination: {
       el: '.swiper-pagination',
     }
    
   }) 
   
 }
  render() {
    return (
      <div>
     <div className="swiper-container">
    <div className="swiper-wrapper">
    {
          this.props.list.map((item,index)=>{
              return <div className='swiper-slide' key={index}>
              <div className="img">
              <img src={item.photoUrl} className='swipe' alt=''/>
              </div>
            </div>
           
            
          })
        }
    </div>
   
    <div className="swiper-pagination"></div>
    
    
</div>
      </div>
    )
  }
}

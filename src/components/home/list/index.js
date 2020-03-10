import React, { Component } from 'react'
import './index.less'
import {getList} from '../../../api/request'

import {Link,withRouter}  from 'react-router-dom'
 class List extends Component {
  constructor(props){
    super(props);
    this.state={
      textlist:[]
    }
  }
  componentDidMount(){
    this.getTextList()
  }
  getTextList(){
    getList().then((res)=>{
       this.setState({
        textlist:res.data
       })
    })
  }
  render() {
    return (
      <div className='textlist'>
        <div className='kong'></div>
        {
          this.state.textlist.map((item,index)=>{
           return <div key={index}>
                     <span>{item.sectionName}</span>
                    <ul>
                       {
                         item.elementDtoList.map((ele,idx)=>{
                           
                             return <li key={idx}>
                                        <Link to={'/shoplist/'+ele.id}>
                                        {/* <a href='/shoplist'> */}
                                          <img src={ ele.photoUrl} alt=''/>
                                          <h3>{ele && ele.name}</h3>
                                        {/* </a> */}
                                        </Link>
                                    </li>
                         })
                         
                       }
                       
                     
                    </ul> 
                    
                  </div>
          })
        } 
      </div>
    )
  }
}
export default withRouter(List)

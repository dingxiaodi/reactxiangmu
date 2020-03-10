import React, { Component } from 'react'
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
import './index.less'
import One from '../one'
import Two from '../two'

export default  class Car extends Component {
 
  render() {
    return (
      <div>
      <div className='card'>
         <ul className='nav'>
           <NavLink to='/mystudy/one'><li>我的课程</li></NavLink>
           <NavLink to='/mystudy/two'><li>我的微专业</li></NavLink>
         </ul>
      </div>
      
      <Switch>
      <Route path='/mystudy/one' component={One}/>
      <Route path='/mystudy/two' component={Two}/>
      <Redirect from='/mystudy' to='/mystudy/one' exact/>
    </Switch>
    
    </div>
    )
  }
}


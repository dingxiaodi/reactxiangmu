import React from 'react';
import './App.css';
import './rem'
import {
  HomeOutlined,
  CopyOutlined,UserOutlined
} from '@ant-design/icons';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom'
import {routes} from './router'
import ShopList from './components/shoplist'
import Login from './components/login'
 import store from './store'
 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      visible:true
    }
  }
  componentDidMount(){
    this.changeTitle(this.props.location.pathname); 
    this.routeListen();  
  }
  routeListen(){  //监听路由的变化
       this.props.history.listen((location)=>{
         this.changeTitle(location.pathname);
       })
  }
  changeTitle(pathname){
    this.setState({
      visible:true
    })
    switch(pathname){
      case  '/':
      case '/home':document.title="首页";break;
      case '/mystudy':document.title="我的学习";break;
      case '/user':document.title="用户";break;
     
      default:
              if(pathname.includes("/login/")||pathname.includes("/login")){
                document.title="登陆注册"
        this.setState({
          visible:false
        })
              }
              

    }
}
  render(){
    
  return (
    <div className="App">
      
      
      <ul className='footer' style={{"display":this.state.visible?'':"none"}}>
           <li><NavLink to='/home'>
           <HomeOutlined style={{fontSize:'0.54rem',marginBottom:'0.08rem'}}/>
             首页</NavLink></li>
            
           <li>
           
      
           
             <NavLink to='/mystudy'> <CopyOutlined style={{fontSize:'0.54rem',marginBottom:'0.08rem'}}/>我的学习</NavLink>
             </li>
           <li><NavLink to='/user'><UserOutlined style={{fontSize:'0.54rem',marginBottom:'0.08rem'}}/>账号</NavLink></li>
         </ul>
         <Switch>
            {
              routes.map((item)=>{
                return  <Route key={item.path} path={item.path} component={item.component}/>
              })
            }
            <Redirect from="/" to="/home" exact />
            <Route path='/shoplist/:id' component={ShopList}/>
            <Route path='/login' component={Login}/>
          </Switch>
         
    </div>
  );
}
}

export default withRouter (App);

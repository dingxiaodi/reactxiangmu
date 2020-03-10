import Home from '../components/home'
import My from '../components/my'
import Xuexi from '../components/xuexi'
import Users from '../components/login/users'
import Register from '../components/login/register'
export const routes= [
  {
    path:'/home',
    component:Home
},
{
    path:'/mystudy',
    component:My
},
{
    path:'/user',
    component:Xuexi
},
{
    path:'/login/myuser',
    component:Users
},
{
    path:'/login/register',
    component:Register
}
]


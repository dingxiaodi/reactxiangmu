

import {getDetail} from '../../api/request'

export default {
  getCarList(id){
  return  (dispatch)=>{
    getDetail(id).then((res)=>{
     console.log(res)
       dispatch({
         type:'XLIST',
         data:res.data
       })
    })
  }
  },
  addAction(p){
    console.log(p)
    return {
        type:"ADD",
        p
    }
  },
  inc(id){
    return {
        type:"INCREMENT",
        id
    }
},
dec(id){
    return {
        type:"DECREMENT",
        id
    }
}
}

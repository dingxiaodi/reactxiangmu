import axios from './index'

export const getSwiper =()=>{  
  return axios.get("/swiper")
}
export const getIcon =()=>{
  return axios.get('/iconDtoList')
}
export const getList =()=>{
  return axios.get('/list')
}
export const getDetail =(id)=>{
  return axios.get('/result/'+id,{id})
}
export  const getUser =(username,password)=>{
  return axios.post('/user',{username,password})
}
export  const setUser =()=>{
  return axios.get('/user?'+'username=123456')
}
export const getCar =(id)=>{
  return axios.get('/carlist/'+id,{id})
}

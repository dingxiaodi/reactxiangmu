const initialState = {
   clist:[],
   a:0
}

export default (state = initialState, { type, p,id }) => {
  switch (type) {

  case 'ADD':
    var newState={...state};
    
    if(newState.clist.length===0){  //1.如果购物车为空 直接加入
        newState.clist.push(p);
        newState.a++
    }
    else{
       var idx = newState.clist.findIndex((item)=>item.id===p.id);
       if(idx!==-1){       //3.购物车不为空，但有添加过商品 ,数量+1
           newState.clist[idx].count++;
           newState.a++
       }
       else{  //2.购物车不为空，但没有添加过商品 ,直接加入 
          newState.clist.push(p);
          newState.a++
       }
    }
      return newState
      case 'INCREMENT':
        var newState ={...state}
        var idx = newState.clist.findIndex((item)=>item.id===id);
        newState.clist[idx].count++;
        newState.a++
        return newState;
 case 'DECREMENT':
     var newState ={...state}
     var idx = newState.clist.findIndex((item)=>item.id===id);
     if(newState.clist[idx].count>1){
          newState.clist[idx].count--;
          newState.a++
     }
    
     return newState;
  default:
    return state
  }
}

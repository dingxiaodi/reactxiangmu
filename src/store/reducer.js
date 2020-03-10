import {combineReducers} from 'redux';

import shopListReducer from '../components/shoplist/reducer'
import carReducer from '../components/one/reducer'
var reducer = combineReducers({
  shopList:shopListReducer,
  carList:carReducer
})

export default reducer;



import { products } from "../pages/Products";
import {
  ERR_DATA,
  GET_DATA,
  GET_TOTAL,
  DELETE_ITEM,
  REQ_DATA,
  INCREMENT,
  DECREMENT,
} from "./actionTypes";

function getCartData(dispatch) {
  dispatch(req_data());
    
      dispatch({
        type: GET_DATA,
        payload: products,
      })
    
}



export const req_data = () => ({
  type: REQ_DATA,
});

export const error_data = (err) => ({
  type: ERR_DATA,
  payload: err,
});


export const getTotal = (cartData) => ({
    type: GET_TOTAL,
    payload : cartData,
   
  });

export const deleteItem = (dispatch,id) =>{

    dispatch({
    type :DELETE_ITEM,
    payload: id,
    });
}

export const incrementItem = (dispatch,id,quantity) =>{
  dispatch({
    type : INCREMENT,
    payload : id,quantity,
  })
}

export const decrementItem = (dispatch,id,quantity) =>{
  dispatch({
    type : DECREMENT,
    payload : id,quantity,
  })
}
export { getCartData};
import { products } from "../pages/Products";
import axios from "axios";
import {

  ERR_CARTDATA,
  GET_CARTDATA,
  GET_TOTAL,
  DELETE_ITEM,
  REQ_CARTDATA,
  INCREMENT,
  DECREMENT,
  UPDATE_TOTAL,
} from "./actionTypes";

function getCartData(dispatch) {
  dispatch(req_data());
  axios
  .get("https://movie-fake-server.herokuapp.com/products")
  .then((res) =>
      dispatch({
        type: GET_CARTDATA,
        payload: products,
      })
  )
}

export const updateTotal = () =>({
  type : UPDATE_TOTAL,
})

export const req_data = () => ({
  type: REQ_CARTDATA,
});

export const error_data = (err) => ({
  type: ERR_CARTDATA,
  payload: err,
});


export const getTotal = (cartData) => ({
    type: GET_TOTAL,
    payload : cartData
   
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
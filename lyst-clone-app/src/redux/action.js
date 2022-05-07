
import data from "../db.json";
import {
  CLEAR_FILTER,
  FILTER_DATA,
  GET_DATA,
  SEARCH_ITEMS,
  SORT_DATA,
} from "./actionTypes";
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
  let cartData= JSON.parse(localStorage.getItem("cart"))||[];
  dispatch({
    type:GET_CARTDATA,
    payload:cartData
  })
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

export const incrementItem = (dispatch,id,qty) =>{
  dispatch({
    type : INCREMENT,
    payload : id,qty,
  })
}

export const decrementItem = (dispatch,id,qty) =>{
  dispatch({
    type : DECREMENT,
    payload : id,qty,
  })
}




export const getData = (id) => ({
  type: GET_DATA,
  payload: data[id],
});

export const sortData = (payload) => ({
  type: SORT_DATA,
  payload,
});

export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const searchItem = (payload) => ({
  type: SEARCH_ITEMS,
  payload: data[payload],
});

export { getCartData};

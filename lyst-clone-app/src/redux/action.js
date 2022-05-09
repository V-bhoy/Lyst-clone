import data from "../db.json";
import {
  GETCARTDATA,
  SORT_DATA,
  CLEAR_FILTER,
  FILTER_DATA,
  GET_DATA,
  SEARCH_ITEMS,
  GET_CARTDATA,
  GET_TOTAL,
  DELETE_ITEM,
  INCREMENT,
  DECREMENT,
  UPDATE_TOTAL,
} from "./actionTypes";

function getCartData(dispatch) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  dispatch({
    type: GET_CARTDATA,
    payload: cartData,
  });
}

export const updateTotal = () => ({
  type: UPDATE_TOTAL,
});

export const getTotal = (cartData) => ({
  type: GET_TOTAL,
  payload: cartData,
});

export const deleteItem = (dispatch, id) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};

export const incrementItem = (dispatch, id, qty) => {
  dispatch({
    type: INCREMENT,
    payload: id,
    qty,
  });
};

export const decrementItem = (dispatch, id, qty) => {
  dispatch({
    type: DECREMENT,
    payload: id,
    qty,
  });
};

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

export const getCartItems = () => {
  let totalPrice = 0;
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData.map((prod) => {
    totalPrice = totalPrice + prod.price * prod.qty;
  });
  return {
    type: GETCARTDATA,
    payload: { cartData, totalPrice },
  };
};

export const searchItem = (payload) => ({
  type: SEARCH_ITEMS,
  payload: data[payload],
});

export { getCartData };

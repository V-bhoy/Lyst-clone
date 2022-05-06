import data from "../db.json";
import {
  APPLYDISCOUNT,
  CLEAR_FILTER,
  FILTER_DATA,
  GETCARTDATA,
  GET_DATA,
  SORT_DATA,
} from "./actionTypes";

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

export const updateTotalPrice = (value) => ({
  type: APPLYDISCOUNT,
  payload: value,
});
export const getCartData = () => {
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

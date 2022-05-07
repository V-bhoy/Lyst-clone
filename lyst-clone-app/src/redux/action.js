import data from "../db.json";
import {
  
  FILTER_DATA,
  GET_DATA,
  SEARCH_ITEMS,
  APPLYDISCOUNT,
  CLEAR_FILTER,
  GETCARTDATA,
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

export const searchItem = (payload) => ({
  type: SEARCH_ITEMS,
  payload: data[payload],
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
  console.log(totalPrice,"price")
  return {
    type: GETCARTDATA,
    payload: { cartData, totalPrice },
  };
};

import data from "../db.json";
import {
  CLEAR_FILTER,
  FILTER_DATA,
  GET_DATA,
  SEARCH_ITEMS,
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

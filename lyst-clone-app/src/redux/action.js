import data from "../db.json";
import { CLEAR_FILTER, FILTER_DATA, GET_DATA, SORT_DATA } from "./actionTypes";

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

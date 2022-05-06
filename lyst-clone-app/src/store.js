import { createStore } from "redux";
import reducer from "./reducer";

const userList = JSON.parse(localStorage.getItem("userList") || "[]");
const preloadedState = {
  userList: userList,
  currentUser: "",
  isLoggedIn: false,
  mandiData: [],
  isMandiDataAvailable: false,
};

const store = createStore(reducer, preloadedState);
export default store;

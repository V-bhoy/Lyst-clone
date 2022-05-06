import { useContext } from "react";
import React from "react";
import store from "./store";
import axios from "axios";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  //actions
  const addNewUser = (detail) => {
    store.dispatch({ type: "ADD_USER", payload: { userDetail: detail } });
  };

  const logOutUser = () => {
    store.dispatch({ type: "LOG_OUT_USER" });
  };

  const loginUser = (user) => {
    store.dispatch({
      type: "LOGIN_USER",
      payload: { currentUser: user.email },
    });
  };

  const verifyUser = (personDetail) => {
    const resultantUser = store
      .getState()
      .userList.find((item) => item.email === personDetail.email);
    if (!resultantUser) return { verified: false, error: "User not found." };
    if (resultantUser.password !== personDetail.password)
      return { verified: false, error: "wrong password." };
    return { verified: true, error: null };
  };

  const fetchMandiData = async () => {
    if (store.getState().isMandiDataAvailable) return;
    await axios
      .get(
        "https://api.krishi.network/mandi?lat=28.44108136&lon=77.0526054&ver=89&lang=hi&crop_id=10"
      )
      .then((res) => {
        res = res.data.data.other_mandi;
        store.dispatch({ type: "ADD_MANDI_DATA", payload: { data: res } });
      })
      .then(() => {
        store.dispatch({ type: "MANDI_DATA_ADDED" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        store,
        addNewUser,
        logOutUser,
        loginUser,
        verifyUser,
        fetchMandiData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

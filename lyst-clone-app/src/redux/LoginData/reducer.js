const userList = JSON.parse(localStorage.getItem("userList")) || [];
const currentUser = JSON.parse(localStorage.getItem("CurrentUser")) || "";
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

const preloadedState = {
  userList: userList,
  currentUser: currentUser,
  isLoggedIn: isLoggedIn,
  mandiData: [],
  isMandiDataAvailable: false,
};

const loginReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case "ADD_USER":
      localStorage.setItem(
        "userList",
        JSON.stringify([...state.userList, action.payload.userDetail])
      );
      return {
        ...state,
        userList: [...state.userList, action.payload.userDetail],
      };

    case "LOGIN_USER":
      localStorage.setItem(
        "CurrentUser",
        JSON.stringify(action.payload.currentUser)
      );
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.currentUser,
      };

    case "LOG_OUT_USER":
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
      return { ...state, isLoggedIn: false, currentUser: "" };

    case "ADD_MANDI_DATA":
      return { ...state, mandiData: action.payload.data };

    case "MANDI_DATA_ADDED":
      return { ...state, isMandiDataAvailable: true };

    default:
      return { ...state };
  }
};

export default loginReducer;

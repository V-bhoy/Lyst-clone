const userList = JSON.parse(localStorage.getItem("userList") || "[]");
const preloadedState = {
  userList: userList,
  currentUser: "",
  isLoggedIn: false,
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
        return {
          ...state,
          isLoggedIn: true,
          currentUser: action.payload.currentUser,
        };
  
      case "LOG_OUT_USER":
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
  
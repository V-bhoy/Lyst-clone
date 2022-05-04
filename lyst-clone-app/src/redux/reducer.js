import {
    ERR_DATA,
    GET_DATA,
    REQ_DATA,
    DELETE_ITEM,
    GET_TOTAL,
  } from "./actionTypes";
  
  const initState = {
    isLoggedIn: false,
    isError: false,
    cartData: [],
    totalAmount: 0,
    totalItem: 0,
  };
  
  const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case REQ_DATA:
        return {
          ...state,
          isLoggedIn: true,
          isError: false,
          cartData: [],
        };
      case ERR_DATA:
        return {
          ...state,
          isLoggedIn: false,
          isError: true,
          cartData: [],
        };
      case GET_DATA:
        return {
          ...state,
          isLoggedIn: false,
          isError: false,
          cartData: payload,
        };
        case DELETE_ITEM:
            return {
             ...state,
             cartData: state.cartData.filter((curElem) => {
              return curElem.id !== payload.id;
            }),
            };

          case GET_TOTAL :
            let { totalItem, totalAmount } = state.cartData.reduce(
              (accum, curVal) => {
                let { price, quantity } = curVal;
        
                let updatedTotalAmount = price * quantity;
                accum.totalAmount += updatedTotalAmount;
        
                accum.totalItem += quantity;
                return accum;
              },
              {
                totalItem: 0,
                totalAmount: 0,
              }
            );
            console.log(totalAmount);
            return { ...state, totalItem, totalAmount };
        
          
      default:
        return state;
    }
  };
  export { reducer };
import { GETCARTDATA } from "./actionTypes";
const initState = {
  cartData: [],
  totalPrice: 0,
  tax: 0,
};
export const ShippingReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETCARTDATA: {
      return {
        ...state,
        totalPrice: payload.totalPrice,
        tax: +(payload.totalPrice * 0.12).toFixed(1),
        cartData: payload.cartData,
      };
    }
    default: {
      return state;
    }
  }
};

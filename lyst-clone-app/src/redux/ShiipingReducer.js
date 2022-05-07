import { APPLYDISCOUNT, GETCARTDATA } from "./actionTypes";
const initState = {
  cartData: [],
  totalPrice: 0,
  tax: 0,
  promoCodeStatus: true,
};
export const ShippingReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case APPLYDISCOUNT: {
      return {
        ...state,
        totalPrice: payload,
        tax: payload * 0.12,
        promoCodeStatus: false,
      };
    }
    case GETCARTDATA: {
      return {
        ...state,
        totalPrice: payload.totalPrice,
        tax: payload.totalPrice * 0.12,
        cartData: payload.cartData,
      };
    }
    default: {
      return state;
    }
  }
};

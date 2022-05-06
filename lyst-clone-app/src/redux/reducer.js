import {
  APPLYDISCOUNT,
  CLEAR_FILTER,
  FILTER_DATA,
  GETCARTDATA,
  GET_DATA,
  SORT_DATA,
} from "./actionTypes";

const initState = {
  data: [],
  filterData: [],
  cartData: [],
  totalPrice: 0,
  tax: 0,
  promoCodeStatus: true,
};

export const ProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    case SORT_DATA:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          if (payload === "l2h") {
            return Number(a.price) - Number(b.price);
          } else {
            return Number(b.price) - Number(a.price);
          }
        }),
      };
    case FILTER_DATA:
      return {
        ...state,
        filterData: state.data.filter((item) => {
          return +item.price < +payload;
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filterData: [],
      };
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
    default:
      return state;
  }
};

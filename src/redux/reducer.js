import {
  ADD_TO_BASKET,
  EMPTY_BASKET,
  REMOVE_FROM_BASKET,
  SET_USER,
} from "./actionTypes";

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, val) => acc + val.price, 0);

export const initialState = { basket: [], user: null };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    case REMOVE_FROM_BASKET:
      const basket = [...state.basket];
      basket.splice(
        basket.findIndex((item) => item.orderId === payload.orderId),
        1
      );
      return {
        ...state,
        basket,
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;

import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./actionTypes";

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
      const index = state.basket.findIndex(({ id }) => id === payload.id);
      const basket = [...state.basket];
      basket.splice(index, 1);
      return {
        ...state,
        basket,
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default reducer;

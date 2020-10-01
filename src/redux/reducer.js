import { ADD_TO_BASKET } from "./actionTypes";

export const initialState = { basket: [], user: null };

const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    default:
      return state;
  }
};

export default reducer;

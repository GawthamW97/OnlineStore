import { INCREASE, DECREASE, REMOVE_ITEM, ADD_TO_CART } from "../actions/types";
const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, payload] };
    case INCREASE:
      return { ...state, payload };
    case DECREASE:
      return { ...state, payload };
    case REMOVE_ITEM:
      return { ...state, payload };
    default:
      return state;
  }
}

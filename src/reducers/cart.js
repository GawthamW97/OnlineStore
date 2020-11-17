import { INCREASE, DECREASE, REMOVE_ITEM, ADD_TO_CART } from "../actions/types";
const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      if (state.items.includes(payload)) {
        return state;
      } else {
        return { ...state, items: [...state.items, payload] };
      }
    case INCREASE:
    case DECREASE:
      state.items.find(function (post, index) {
        if (post.id === payload.id) {
          return {
            ...state,
            items: [
              ...state.items.slice(0, index),
              { payload },
              ...state.items.slice(index + 1),
            ],
          };
        } else {
          return state;
        }
      });
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}

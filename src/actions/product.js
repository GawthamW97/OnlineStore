import { ADD_ITEM } from "./types";

export const setCartItems = (items) => (dispatch) => {
  console.log(items.size);
  dispatch({
    type: ADD_ITEM,
    payload: items,
  });
};

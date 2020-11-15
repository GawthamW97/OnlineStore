import { INCREASE, DECREASE, REMOVE_ITEM, ADD_TO_CART } from "../actions/types";

export const addItemToCart = (obj) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: obj,
  });
};

export const increaseQuantity = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: INCREASE,
    payload: value,
  });
};

export const decreaseQuantity = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: DECREASE,
    payload: value,
  });
};

export const removeItem = (id) => (dispatch) => {
  console.log(id);
  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
};

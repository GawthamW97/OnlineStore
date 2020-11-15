import { INCREASE, DECREASE, REMOVE_ITEM, ADD_TO_CART } from "../actions/types";

export const addItemToCart = (obj) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: obj,
  });
};

export const increaseQuantity = (obj) => (dispatch) => {
  dispatch({
    type: INCREASE,
    payload: obj,
  });
};

export const decreaseQuantity = (obj) => (dispatch) => {
  dispatch({
    type: DECREASE,
    payload: obj,
  });
};

export const removeItem = (id) => (dispatch) => {
  console.log(id);
  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
};

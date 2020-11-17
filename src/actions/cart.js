import { INCREASE, DECREASE, REMOVE_ITEM, ADD_TO_CART } from "../actions/types";

//Add item to cart
export const addItemToCart = (obj) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: obj,
  });
};
//increase quantity of the item selected
export const increaseQuantity = (obj) => (dispatch) => {
  dispatch({
    type: INCREASE,
    payload: obj,
  });
};
//decrease quantity of the item selected
export const decreaseQuantity = (obj) => (dispatch) => {
  dispatch({
    type: DECREASE,
    payload: obj,
  });
};
//remove item selected
export const removeItem = (id) => (dispatch) => {
  console.log(id);
  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
};

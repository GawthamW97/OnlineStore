import { ADD_ITEM } from "../actions/types";
import { data } from "./data";

const initialState = {
  products: [
    {
      id: "1",
      name: "Item 01",
      desc: "ps4",
      price: "9.99",
      inStock: 20,
      quantity: 0,
    },
    {
      id: "2",
      name: "Item 02",
      desc: "ps4",
      price: "19.99",
      inStock: 23,
      quantity: 0,
    },
    {
      id: "3",
      name: "Item 03",
      desc: "ps4",
      price: "59.99",
      inStock: 30,
      quantity: 0,
    },
    {
      id: "4",
      name: "Item 04",
      desc: "ps4",
      price: "39.99",
      inStock: 10,
      quantity: 0,
    },
    {
      id: "5",
      name: "Item 05",
      desc: "ps4",
      price: "19.99",
      inStock: 40,
      quantity: 0,
    },
  ],
  count: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return { ...state, count: payload.size };
    default:
      return state;
  }
}

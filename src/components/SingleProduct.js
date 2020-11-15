import { Button, Card, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { setCartItems } from "../actions/product";
import { addItemToCart } from "../actions/cart";
import PropTypes from "prop-types";

function SingleProduct({
  product,
  setCartItems,
  addItemToCart,
  setItems,
  items,
}) {
  const addItem = (obj) => {
    setCartItems(items.add(obj.id));
    addItemToCart(obj);
  };
  return (
    <div>
      <Card>
        <div style={{ width: "200px", height: "200px" }}></div>
        <div style={{ padding: "10px" }}>
          <Typography variant="body1">{product.name}</Typography>
          <Typography variant="subtitle2">{product.price}</Typography>
        </div>
        <div style={{ float: "right", padding: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => addItem(product)}
          >
            Add to Card
          </Button>
        </div>
      </Card>
    </div>
  );
}
SingleProduct.prototype = {
  setCartItems: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};
export default connect(null, { setCartItems, addItemToCart })(SingleProduct);

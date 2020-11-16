import { Button, Card, Typography, CardMedia } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../actions/cart";
import PropTypes from "prop-types";

function SingleProduct({ product, addItemToCart, count, setCount }) {
  const addItem = (obj) => {
    obj.quantity = obj.quantity + 1;
    addItemToCart(obj);
    setCount(count + 1);
  };
  return (
    <div>
      <Card>
        <div style={{ width: "200px", height: "200px" }}>
          <CardMedia>
            <img src={product.image} alt="product" width="100%" height="100%" />
          </CardMedia>
        </div>
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
  addItemToCart: PropTypes.func.isRequired,
};
export default connect(null, { addItemToCart })(SingleProduct);

import { Button, Card, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { setCartItems } from "../actions/product";
import PropTypes from "prop-types";

function SingleProduct({ product, setCartItems, setItems, items }) {
  const addItem = (id) => {
    setCartItems(items.add(id));
  };
  console.log(product);
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
            onClick={(e) => addItem(product.id)}
          >
            Add to Card
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default connect(null, { setCartItems })(SingleProduct);

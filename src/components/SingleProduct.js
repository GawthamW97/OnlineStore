import { Button, Card, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../actions/cart";
import PropTypes from "prop-types";

function SingleProduct({ product, addItemToCart, setItems, items }) {
  const [disable, setDisable] = useState(product.status);

  const addItem = (obj) => {
    obj.status = true;
    addItemToCart(obj);
    setDisable(true);
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
            disabled={disable}
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

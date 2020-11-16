import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ProductsPage(props) {
  const { products, listOfItems } = props;

  const getCount = (items) => {
    let value = 0;
    items.map((item) => {
      value = value + item.quantity;
    });
    return value;
  };

  const [count, setCount] = useState(getCount(listOfItems));

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: "inline-block", width: "100%" }}>
            <Typography variant="h4">My Online Store</Typography>
            <Link to="/cart">
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right" }}
              >
                Cart ({count === 0 ? getCount(listOfItems) : count})
              </Button>
            </Link>
          </div>
        </Grid>
        {products &&
          products.map((product) => {
            return (
              <Grid item xs={3} key={product.id} style={{ padding: "5px" }}>
                <SingleProduct
                  product={product}
                  count={count}
                  setCount={setCount}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

ProductsPage.prototype = {
  products: PropTypes.number.isRequired,
  listOfItems: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  listOfItems: state.cart.items,
});
export default connect(mapStateToProps)(ProductsPage);

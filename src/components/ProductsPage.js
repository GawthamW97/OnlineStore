import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ProductsPage(props) {
  const { products, listOfItems } = props;

  // returns the amount of items added in the cart
  const getCount = (items) => {
    let value = 0;
    items.map((item) => {
      return (value = value + item.quantity);
    });
    return value;
  };

  const [count, setCount] = useState(getCount(listOfItems)); // hooks variable is used to maintain the count value shown

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <div style={{ padding: "10px" }}>
            <Typography variant="h4">My Online Store</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: "10px" }}>
            <Link to="/cart">
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right" }}
              >
                {/* check if the count value has been reset after redirectinf from the shopping cart page */}
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
  products: state.product.products, //get all the products from the store
  listOfItems: state.cart.items, // get the list of items that haven selected by user
});
export default connect(mapStateToProps)(ProductsPage);

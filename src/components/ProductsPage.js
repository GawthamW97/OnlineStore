import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProductsPage(props) {
  const { products, counts } = props;
  const itemSet = new Set();
  const [items, setItems] = useState(itemSet);
  useEffect(() => {});
  console.log(counts);
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: "inline-block", width: "100%" }}>
            <Typography variant="h4">My Online Store</Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right" }}
            >
              Cart ({counts})
            </Button>
          </div>
        </Grid>
        {products &&
          products.map((product) => {
            return (
              <Grid item xs={3} key={product.id} style={{ padding: "5px" }}>
                <SingleProduct
                  product={product}
                  setItems={setItems}
                  items={items}
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
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  counts: state.product.count,
});
export default connect(mapStateToProps)(ProductsPage);

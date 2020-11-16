import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonGroup,
  TextField,
} from "@material-ui/core";
import PropTypes from "prop-types";

import { increaseQuantity, decreaseQuantity } from "../actions/cart";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ShoppingCart(props) {
  const classes = useStyles();

  const { items, increaseQuantity, decreaseQuantity } = props;

  const initialState = {
    item: {
      id: items.id,
      order: items.order,
      name: items.name,
      desc: items.desc,
      price: items.price,
      inStock: items.inStock,
      quantity: items.quantity,
      status: items.status,
    },
  };
  const [product, setProduct] = useState(initialState);

  const increase = (obj) => {
    if (obj.quantity <= obj.inStock) {
      obj.quantity = obj.quantity + 1;
      increaseQuantity(obj);
      setProduct({ ...product, quantity: obj.quantity });
    }
  };

  const decrease = (obj) => {
    if (obj.quantity > 0) {
      obj.quantity = obj.quantity - 1;
      decreaseQuantity(obj);
      setProduct({ ...product, quantity: obj.quantity });
    }
  };
  console.log(items);

  const setOrderValues = (items) => {
    items.map(function (row, index) {});
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: "inline", width: "100%" }}>
            <div>
              <Typography variant="h4">Shopping Cart</Typography>
            </div>
            <div align="right">
              <Typography variant="h5">{items.length} Items</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Details</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items &&
                  items.map(function (row, index) {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          <div style={{ display: "inline-block" }}>
                            <div
                              style={{
                                width: "150px",
                                height: "100px",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src={row.image}
                                alt="product"
                                width="100%"
                                height="100%"
                              />
                            </div>
                            <div style={{ display: "inline-block" }}>
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: "5px",
                                }}
                              >
                                <li style={{ padding: "4px" }}>
                                  <Typography variant="h6">
                                    {row.name}
                                  </Typography>
                                </li>
                                <li style={{ padding: "4px", color: "red" }}>
                                  {row.desc}
                                </li>
                                <li style={{ padding: "4px", color: "gray" }}>
                                  <Typography variant="body2">
                                    Remove
                                  </Typography>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <ButtonGroup>
                            <Button
                              color="primary"
                              size="small"
                              onClick={() => increase(row)}
                            >
                              <AddIcon />
                            </Button>
                            <Button>
                              <TextField
                                value={row.quantity}
                                variant="standard"
                                size="small"
                                style={{ width: "20px" }}
                              />
                            </Button>
                            <Button
                              color="primary"
                              size="small"
                              onClick={() => decrease(row)}
                            >
                              <RemoveIcon />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                        <TableCell align="center">
                          {row.quantity * row.price}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

ShoppingCart.prototype = {
  items: PropTypes.array.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity })(
  ShoppingCart
);

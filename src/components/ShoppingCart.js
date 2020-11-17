import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
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
} from "@material-ui/core";
import PropTypes from "prop-types";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../actions/cart";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    fontSize: "15pt",
  },
});

function ShoppingCart(props) {
  const classes = useStyles();

  const { items, increaseQuantity, decreaseQuantity, removeItem } = props;

  //Initail state for the hooks varible
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

  const [history, setHistory] = useState(useHistory());
  const [product, setProduct] = useState(initialState); //create a hooks variable for the items selected by the users

  // when the user increases the quantity of the item this function will called
  const increase = (obj) => {
    if (obj.quantity <= obj.inStock) {
      obj.quantity = obj.quantity + 1;
      increaseQuantity(obj);
      setProduct({ ...product, quantity: obj.quantity });
    }
  };
  // when the user decrese the quantity of the item this function will called
  const decrease = (obj) => {
    if (obj.quantity > 0) {
      obj.quantity = obj.quantity - 1;
      decreaseQuantity(obj);
      setProduct({ ...product, quantity: obj.quantity });
    }
  };

  // this function will be called when the user wants to remove an item from the list
  const removeItemFromCart = (id) => {
    removeItem(id);
  };

  //this function will be triggered when the user clicks on "Countinue Shopping button"
  const goBackToProduct = () => {
    history.goBack(); // The user will be redircted back to the product page
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <div style={{ padding: "10px" }}>
            <Typography variant="h4">Shopping Cart</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div align="right" style={{ padding: "10px" }}>
            <Typography variant="h5">{items.length} Items</Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} elevation={3}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    Product Details
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Quantity
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Price
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    Total
                  </TableCell>
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
                              </ul>
                              <Button
                                variant="text"
                                onClick={(e) => removeItemFromCart(row.id)}
                                style={{ textTransform: "none" }}
                              >
                                <Typography variant="body2">Remove</Typography>
                              </Button>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          <ButtonGroup>
                            <Button
                              color="primary"
                              size="small"
                              onClick={() => increase(row)}
                              variant="text"
                            >
                              <AddIcon />
                            </Button>
                            <Typography
                              variant="body1"
                              style={{
                                border: "1px solid gray",
                                paddingTop: "4px",
                              }}
                            >
                              {row.quantity}
                            </Typography>
                            <Button
                              color="primary"
                              size="small"
                              onClick={() => decrease(row)}
                              variant="text"
                            >
                              <RemoveIcon />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body1">{row.price}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body1">
                            {(row.quantity * row.price).toFixed(2)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <div style={{ float: "left", paddingTop: "15px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              startIcon={<ArrowBackIcon />}
              onClick={(e) => goBackToProduct()}
            >
              Countinue Shopping
            </Button>
          </div>
          <div
            style={{ display: "inline", float: "right", paddingTop: "15px" }}
          >
            <Button variant="contained" color="primary">
              Checkout
            </Button>
          </div>
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
  items: state.cart.items, //get the list of items user has selected
});

export default connect(mapStateToProps, {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
})(ShoppingCart);

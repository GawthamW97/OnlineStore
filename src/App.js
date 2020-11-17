import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import ShoppingCart from "./components/ShoppingCart";

//Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="md">
          <Route exact path="/" component={ProductsPage} />
          <section>
            <Switch>
              <Route exact path="/cart" component={ShoppingCart} />
            </Switch>
          </section>
        </Container>
      </Router>
      ;
    </Provider>
  );
}

export default App;

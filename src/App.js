import "./App.css";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
// import {useState, useEffect} from "react";
import Error404 from "./Error404";

const App = () => {
  const [productList, setProductList] = useState([]);
  const addProduct = (productData) => {
    setProductList([...productList, productData]);
  };

  useEffect(() => {
    console.log("Component did mount");
    return () => {
      console.log("Component will unmount");
    };
  }, [productList]);

  const backToList = () => {
    <Redirect to="/"></Redirect>;
  };
  return (
    <Router>
      <Grid container justifyContent={"center"} spacing={3}>
        <Grid item lg={12}>
          {/* <Link to="/">Home</Link> */}
          <Link to="/">Product List</Link>
          <Link to="/add-product">Add Products</Link>
        </Grid>
        <Grid item lg={12}>
          <Switch>
            <Route exact path="/">
              <ProductList productList={productList} />
            </Route>
            <Route exact path="/product-details">
              <ProductDetails
                productDetails={ProductDetails}
                backToList={backToList}
              />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;

import "./App.css";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Grid from "@material-ui/core/Grid";
import AddProduct from "./AddProduct";
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
import Loader from "./Loader";
import { useHistory } from "react-router-dom";

const App = () => {
  const [productList, setProductList] = useState([]);
  // const addProduct = (productData) => {
  //   setProductList([...productList, productData]);
  // };
  // const [loader, setLoader] = useState(true);

  const history = useHistory();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1000);
  // }, []);

  const backToList = () => {
    <Redirect to="/"></Redirect>;
    // setLoader(true);
    // setTimeout(() => {
      // setLoader(false);
    // }, 1000);
    //history.push("/");
  };

  const updateProduct = () => {
    //<Redirect to="/update-product"></Redirect>;
    history.push('/update-product')
  };
  return (
    <Router>
      {/* {loader ? (
        <Loader />
      ) : ( */}
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
                  updateProduct={updateProduct}
                />
              </Route>
              <Route exact path="/add-product">
                <AddProduct />
              </Route>
              {/* <Route path="*">
                <Error404 />
              </Route> */}
            </Switch>
          </Grid>
        </Grid>
      {/* )} */}
    </Router>
  );
};

export default App;

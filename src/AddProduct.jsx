import React from "react";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const addProduct = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };

  const addProductButton = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
      })
      .then((response) => {
        // console.log(response.data, "response");
        history.push('/');
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const history=useHistory();
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid container item lg={7}>
        <Grid item lg={12}>
          <div>
            <p>Product Name</p>
            <input
              value={product.name}
              onChange={(e) => addProduct(e, "name")}
            />
          </div>
          <div>
            <p>Product Description</p>
            <input
              value={product.description}
              onChange={(e) => addProduct(e, "description")}
            />
          </div>
          <div>
            <p>Product Price</p>
            <input
              value={product.price}
              onChange={(e) => addProduct(e, "price")}
            />
          </div>
          <div>
            <p>Product Category</p>
            <input
              value={product.category}
              onChange={(e) => addProduct(e, "category")}
            />
          </div>
          <div>
            <p>Product Image</p>
            <input
              value={product.image}
              onChange={(e) => addProduct(e, "image")}
            />
          </div>
          <div>
            <Button onClick={addProductButton}>Add Product</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddProduct;

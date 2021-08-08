import React from "react";
import { useState } from "react";
import { useHistory, useParams} from "react-router";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const updateProduct = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };

  const updateProductButton = () => {
    axios
      .put(`https://fakestoreapi.com/products/${id}`, {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
      })
      .then((response) => {
        // console.log(response.data, "response");
        history.push("/");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const history = useHistory();
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid container item lg={7}>
        <Grid item lg={12}>
          <div>
            <p>Product Name</p>
            <input
              value={product.name}
              onChange={(e) => updateProduct(e, "name")}
            />
          </div>
          <div>
            <p>Product Description</p>
            <input
              value={product.description}
              onChange={(e) => updateProduct(e, "description")}
            />
          </div>
          <div>
            <p>Product Price</p>
            <input
              value={product.price}
              onChange={(e) => updateProduct(e, "price")}
            />
          </div>
          <div>
            <p>Product Category</p>
            <input
              value={product.category}
              onChange={(e) => updateProduct(e, "category")}
            />
          </div>
          <div>
            <p>Product Image</p>
            <input
              value={product.image}
              onChange={(e) => updateProduct(e, "image")}
            />
          </div>
          <div>
            <button onClick={updateProductButton}>Update Product</button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UpdateProduct;

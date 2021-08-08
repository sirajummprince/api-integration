import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductList(response.data);
      })
      .catch();
  }, []);

  const seeDetails = (id) => {
    history.push(`/product-details/${id}`);
  };

  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        <Grid container item lg={7}>
          <Grid item lg={12}>
            {productList.map((product, index) => {
              return (
                <Grid key={index} item lg={3}>
                  <p>{product.id}</p>
                  <p>{product.title}</p>
                  <img
                    src={product.image}
                    style={{ width: "100%" }}
                    alt={"Not Found"}
                  />
                  <p>{product.description}</p>
                  <p>{product.category}</p>
                  <button
                    onClick={() => {
                      seeDetails(product.id);
                    }}
                  >
                    See Details
                  </button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;

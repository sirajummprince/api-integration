import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const ProductDetails = (props) => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },[id]);

  //   const seeDetails=(id)=>{
  //     history.push()
  //   }

  //console.log(productDetails,"ProductDetails");
  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        <Grid container item lg={7}>
          <Grid item lg={12}>
              {productDetails && (
                <>
                  <p>{productDetails.id}</p>
                  <p>{productDetails.title}</p>
                  <img
                    src={productDetails.image}
                    style={{ width: "100%" }}
                    alt={"Not Found"}
                  />
                  <p>{productDetails.description}</p>
                  <p>{productDetails.category}</p>
                  <button
                    onClick={() => {
                      props.backToList();
                    }}
                  >
                    Home Page
                  </button>
                  <button
                    onClick={() => {
                      <Redirect to='/update-product'/>
                    }}
                  >
                    Update Product
                  </button>
                </>
              )}
            );
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;

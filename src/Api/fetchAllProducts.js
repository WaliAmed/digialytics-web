import React from "react";

const FetchAllProducts = (setAllProducts, setProductLoader) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    process.env.REACT_APP_API_URL + "/products/get-products",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.success === true) {
        setAllProducts(result.data);
        setProductLoader(false);
      }
    })
    .catch((error) => console.log("error", error));
};

export default FetchAllProducts;

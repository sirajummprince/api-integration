export const setProductListToStore = (ProductList) => {
  return { type: "update_product_list", payload: ProductList };
};

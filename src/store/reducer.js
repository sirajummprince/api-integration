const initialState = {
  productList: [],
  currentProduct: null,
};

const myReducer = (state = initialState, action) => {
  if (action.type === "update_product_list") {
    return { ...state, productList: action.payload };
  }
  else{
      return state;
  }
};

export default myReducer

// action
// type
// payload

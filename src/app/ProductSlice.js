import { createSlice } from "@reduxjs/toolkit";

let dataFromLoclaStore = () => {
  return (
    JSON.parse(localStorage.getItem("product")) || {
      products: [],
      amout: 0,
      price: 0,
      chekout: true,
    }
  );
};
export const productSlice = createSlice({
  name: "product",
  initialState: dataFromLoclaStore(),
  reducers: {
    // addAmout: (state, { payload }) => {
    //   state.amoutSlice += payload;
    // },
    addAmoutProduct: (state, { payload }) => {
      let findproduct = state.products.find((item) => {
        return item.id == payload.id;
      });

      if (findproduct) {
        findproduct.amout += payload.amout;
        state.amout = findproduct.amout;
      } else {
        state.products.push(payload);
      }
      productSlice.caseReducers.calculatTotal(state);
    },
    addProduct: (state, { payload }) => {
      let findProduct = state.products.find((item) => {
        return item.id == payload.id;
      });

      if (findProduct) {
        findProduct.amout += payload.amout;
        state.amout = findProduct.amout;
      } else {
        state.products.push(payload);
      }
      productSlice.caseReducers.calculatTotal(state);
    },
    deleteproduct: (state, { payload }) => {
      let filterDelete = state.products.filter((product) => {
        return product.id != payload.id;
      });
      // state.amout = 0;
      // state.price = 0;
      // filterDelete.forEach((element) => {
      //   state.amout += element.amout;
      //   state.price += element.price * element.amout;
      // });
      state.products = filterDelete;
      productSlice.caseReducers.calculatTotal(state);

      productSlice.caseReducers.setLocal(state);
    },
    deleteAll: (state, { payload }) => {
      state.amout = 0;
      state.products = [];
      state.price = 0;
      productSlice.caseReducers.setLocal(state);
    },
    incrementAmout: (state, { payload }) => {
      let findProduct = state.products.find((item) => {
        return item.id == payload.id;
      });
      findProduct.amout += 1;
      productSlice.caseReducers.calculatTotal(state);
    },
    decrementAmout: (state, { payload }) => {
      let findProduct = state.products.find((item) => {
        return item.id == payload.id;
      });
      findProduct.amout -= 1;
      productSlice.caseReducers.calculatTotal(state);
    },
    calculatTotal: (state) => {
      let price = 0;
      let amout = 0;
      state.products.forEach((item) => {
        price += item.price * item.amout;
        amout += item.amout;
      });
      state.amout = amout;
      state.price = price;
      productSlice.caseReducers.setLocal(state);
    },
    setLocal: (state) => {
      localStorage.setItem("product", JSON.stringify(state));
    },
  },
});
export const {
  addAmout,
  addProduct,
  addAmoutProduct,
  deleteAll,
  incrementAmout,
  decrementAmout,
  deleteproduct,
} = productSlice.actions;

export default productSlice.reducer;

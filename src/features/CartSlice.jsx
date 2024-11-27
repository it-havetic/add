import { createSlice } from "@reduxjs/toolkit";
import product from "../product";
const initialState = {
  cart: [],
  items: product,
  total: 0,
  quantity: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;

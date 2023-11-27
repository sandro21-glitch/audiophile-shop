import { createSlice } from "@reduxjs/toolkit";
import { CartTypes } from "../cart/cartSlice";

interface CheckoutState {
  checkout: CartTypes[];
}

const initialState: CheckoutState = {
  checkout: [],
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      state.checkout = action.payload;
    },
  },
});

export const { addCartItems } = checkoutSlice.actions;

export default checkoutSlice.reducer;

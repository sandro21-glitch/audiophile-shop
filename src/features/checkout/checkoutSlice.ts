import { createSlice } from "@reduxjs/toolkit";
import { CartTypes } from "../cart/cartSlice";

interface CheckoutState {
  checkout: CartTypes[];
  shipping: number;
}

const initialState: CheckoutState = {
  checkout: [],
  shipping: 50,
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

export const totalSumPrice = (state: { checkout: CheckoutState }) => {
  const checkoutItems = state.checkout.checkout;
  const totalAmount = checkoutItems.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  return totalAmount;
};
// Function to calculate the total sum of VAT for all items in the cart
export const totalSumVat = (state: { checkout: CheckoutState }) => {
  const checkoutItems = state.checkout.checkout;

  const totalVat = checkoutItems.reduce((acc, item) => {
    const vatExcludedPrice = item.price * item.amount;
    // calculating the VAT amount based on a 20% VAT rate
    const vatAmount = vatExcludedPrice * 0.2;
    return acc + vatAmount;
  }, 0);

  return totalVat;
};
export const grandTotalSum = (state: { checkout: CheckoutState }) => {
  // Calling totalSumPrice and totalSumVat functions to get their values
  const totalPrice = totalSumPrice(state);
  const totalVat = totalSumVat(state);

  // Adding shipping, total price, and total VAT to get the grand total
  return totalPrice + state.checkout.shipping + totalVat;
};

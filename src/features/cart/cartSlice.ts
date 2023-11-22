import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
export interface CartTypes {
  id: number;
  shortName: string;
  cartImage: string;
  price: number;
  amount: number;
}
interface CartState {
  cart: CartTypes[];
  openCart: boolean;
}

const initialState: CartState = {
  cart: [],
  openCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.openCart = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setOpenCart, addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state: { cart: CartState }) => state.cart.cart;

// total price
export const totalCartPrice = (state: { cart: CartState }) => {
  const cartItems = selectCart(state);

  if (cartItems.length > 0) {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
    return totalPrice;
  } else {
    console.log("Cart is empty");
  }
};

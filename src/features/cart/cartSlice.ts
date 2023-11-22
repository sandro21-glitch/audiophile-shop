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
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        // Product already exists in the cart, update its amount
        existingProduct.amount += action.payload.amount || 1;
      } else {
        // Product is not in the cart, add it
        state.cart.push(action.payload);
      }
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

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
      console.log(JSON.parse(JSON.stringify(state.cart)));
    },
    increasAmount: (state, action) => {
      const findProductIndex = state.cart.findIndex(
        (product) => product.id === action.payload
      );

      if (findProductIndex !== -1) {
        // Product with the matching id found
        state.cart[findProductIndex].amount += 1;
      }
    },
    decreaseAmount: (state, action) => {
      const findProductIndex = state.cart.findIndex(
        (product) => product.id === action.payload
      );

      if (findProductIndex !== -1) {
        // Decrease the amount
        state.cart[findProductIndex].amount -= 1;

        // If the amount becomes zero or less, remove the product from the cart
        if (state.cart[findProductIndex].amount <= 0) {
          const newCart = state.cart.filter(
            (item) => item.id !== action.payload
          );
          state.cart = newCart;
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setOpenCart,
  addToCart,
  clearCart,
  increasAmount,
  decreaseAmount,
} = cartSlice.actions;

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

// total cart amount
export const totalCartAmount = (state: { cart: CartState }) => {
  const cartItems = state.cart.cart;
  const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0);
  return totalAmount;
};

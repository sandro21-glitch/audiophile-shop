import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
export interface CartTypes {
  cartItem: {
    id: number;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    price: number;
    amount: number;
  };
}
interface ProductsState {
  cart: CartTypes[];
  openCart: boolean;
}

const initialState: ProductsState = {
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
  },
});

export const { setOpenCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;

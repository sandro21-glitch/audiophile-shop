import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
export interface Cart {}
interface ProductsState {
  cart: Cart[];
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
    setOpenCart: (state) => {
      state.openCart = true;
    },
  },
});

export const { setOpenCart } = cartSlice.actions;

export default cartSlice.reducer;

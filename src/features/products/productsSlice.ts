import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  cartImage: string;
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}
interface ProductsState {
  product: Product[];
  singleProduct: Product | null;
}

const initialState: ProductsState = {
  product: [],
  singleProduct: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.product = action.payload;
    },
    getSingleProduct: (state, action) => {
      const singleProductData = state.product.find(
        (prod) => prod.id.toString() === action.payload
      );
      state.singleProduct = singleProductData || null; // Adjusted here
    },
  },
});

export const { setProductData, getSingleProduct } = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default productSlice.reducer;

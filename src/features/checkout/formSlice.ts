import { createSlice } from "@reduxjs/toolkit";

interface formTypes {
  form: {
    billing: {
      name: string;
      email: string;
      number: string;
    };
    shipping: {
      address: string;
      zip: string;
      city: string;
      country: string;
    };
    payment: {
      emoney: boolean;
      cash: boolean;
    };
  };
}

const initialState: formTypes = {
  form: {
    billing: {
      name: "",
      email: "",
      number: "",
    },
    shipping: {
      address: "",
      zip: "",
      city: "",
      country: "",
    },
    payment: {
      emoney: true,
      cash: false,
    },
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
});

// export const { addCartItems } = checkoutSlice.actions;

export default formSlice.reducer;

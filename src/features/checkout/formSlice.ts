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
    emoneyOptions: {
      emoneyNumber: string;
      pin: string;
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
    emoneyOptions: {
      emoneyNumber: "",
      pin: "",
    },
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormState: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { addFormState } = formSlice.actions;

export default formSlice.reducer;

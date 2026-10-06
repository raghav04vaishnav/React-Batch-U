import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  search: "",
  sort: "",
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setSearch, setSort, setLoading, setError } =
  productSlice.actions;

export default productSlice.reducer;

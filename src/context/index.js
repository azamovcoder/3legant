import { api } from "./api";
import authSlice from "./slices/authSlices";
import cartSlice from "./slices/cartSlices";
import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlices";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

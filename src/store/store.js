import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import bannerReducer from "../features/banner/bannerSlice";
import cartReducer from "../features/cart/cartSlice";
import categoryReducer from "../features/category/categorySlice";
import contactReducer from "../features/contact/contactSlice";
import couponReducer from "../features/coupons/couponSlice";
import foodReducer from "../features/foods/foodSlice";
import orderReducer from "../features/order/orderSlice";
import provinceReducer from "../features/provinces/provinceSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    coupons: couponReducer,
    provinces: provinceReducer,
    foods: foodReducer,
    category: categoryReducer,
    banners: bannerReducer,
    orders: orderReducer,
    cart: cartReducer,
    contacts: contactReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

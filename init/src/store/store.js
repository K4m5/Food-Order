import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import bannerReducer from "../features/banner/bannerSlice";
import categoryReducer from "../features/category/categorySlice";
import contactReducer from "../features/contact/contactSlice";
import couponReducer from "../features/coupons/couponSlice";
import districtReducer from "../features/district/districtSlice";
import foodReducer from "../features/foods/foodSlice";
import provinceReducer from "../features/provinces/provinceSlice";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    coupons: couponReducer,
    category: categoryReducer,
    foods: foodReducer,
    contacts: contactReducer,
    banners: bannerReducer,
    provinces: provinceReducer,
    districts: districtReducer,
    cart: cartReducer,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

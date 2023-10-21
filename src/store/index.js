import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import mainSlice from "./mainSlice";

export const store = configureStore({
    reducer:{
        authSlice,
        mainSlice
    }
})

export default store;
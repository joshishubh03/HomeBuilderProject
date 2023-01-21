import { configureStore } from "@reduxjs/toolkit";
import postslice from "./Slices/postSlice.js";
import userslice from "./Slices/userSlice.js";
const Store = configureStore({
    reducer:{
     User:userslice,
     Post:postslice
    }
});
export default Store;
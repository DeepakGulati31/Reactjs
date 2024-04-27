// step1 : import configure store
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
export const store=configureStore({
    reducer:todoSlice
})


// har ek application ka ek hi store hota h
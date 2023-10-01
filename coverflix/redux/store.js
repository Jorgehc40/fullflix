import { configureStore } from "@reduxjs/toolkit";
import coverflixSlice from "./coverflixSlice";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
    reducer: {
        coverflix: coverflixSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })

})
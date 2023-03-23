import { configureStore } from "@reduxjs/toolkit";
import locationRecer from './Features/LocationSlice/LocationSlice'
const store = configureStore({
    reducer: {
        location: locationRecer,
    }
})

export default store
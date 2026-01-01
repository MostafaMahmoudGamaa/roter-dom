import { configureStore } from "@reduxjs/toolkit"
import addTrader from "../features/FBASlices/traderSlice"

export const store = configureStore({
    reducer:{
        trader: addTrader
    }
})
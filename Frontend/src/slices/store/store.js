import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../apiSlice'
import cartSliceReducer from '../cartSlice.js'
// import authSliceReducer from './src/slices/authSlice.js'



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        shop: cartSliceReducer,
    //     auth: authSliceReducer  [apiSlice.reducerPath]: apiSlice.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store
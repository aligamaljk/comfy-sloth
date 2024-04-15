import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Slice/SliceProducts'
import CartSlice from './Slice/SliceCart'
import userSlice from './Slice/SliceUser'
const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: CartSlice,
        user: userSlice
    },
})

export default store
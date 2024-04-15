/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit"
import { GetCart, SetCart } from "../../LocalStorage/LocalStorage"
const getLocalCartData = () => {
    const data = GetCart()
    if (data) {
        return data
    } else {
        return []
    }
}
const CartSlice = createSlice({
    name: "cart",
    initialState: getLocalCartData(),
    reducers: {
        addToCart: (state, action, check) => {
            console.log(check);
            const item = state.find((item) => item.id === action.payload.id)
            if(item){
                    item.quantity += 1
            } else {
                state.push({...action.payload, quantity: 1, check:check })
            }
            SetCart(state)
        },
        removeFromCart: (state, action) => {
            state = state.filter((item) => item.id !== action.payload.id)
            SetCart(state)
            return state
        },
        removeCart: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id)
            if(item.quantity > 1){
                item.quantity -= 1
            } else {
                state = state.filter((item) => item.id !== action.payload.id)
            }
            SetCart(state)
            return state
        },
        clearCart: (state) => {
            state = []
            SetCart(state)
            return state
        }
    },
})

export const { addToCart, removeFromCart, clearCart, removeCart } = CartSlice.actions
export default CartSlice.reducer

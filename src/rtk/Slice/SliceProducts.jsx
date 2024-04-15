import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const products_url = 'https://www.course-api.com/react-store-products';

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
    const response = await axios.get(products_url)
    const data = await response.data
    return data
}
)

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return state = action.payload
        }),
        builder.addCase(fetchProducts.rejected, (state, action) => {
            return action.error
        }),
        builder.addCase(fetchProducts.pending, (state, action) => {
            // console.log(action?.meta?.requestStatus)
            return action?.meta?.requestStatus
        })
    }
}) 

export default productsSlice.reducer
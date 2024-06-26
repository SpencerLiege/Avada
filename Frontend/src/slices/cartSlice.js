import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/updateCart";


const initialState = localStorage.getItem('shop') ? JSON.parse(localStorage.getItem('shop')) : { cartItems: [], shippingAddres: {}, paymentMethod: '' }

const cartSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action)=> {
            const item = action.payload

            const itemExist = state.cartItems.find((i) => i._id === item._id)

            if(itemExist){

                state.cartItems = state.cartItems.map((x)=> (x._id === item._id ? item: x))

            }
            else{
                console.log('active')
                state.cartItems.push(item)
            }

            updateCart(state)
        },
        updateCartQty: (state, action)=> {
            const { _id, qty } = action.payload
            const item = state.cartItems.find((x)=> x._id === _id)

            if(item){
                item.qty = qty
                updateCart(state)
            }
        },
        removeItem: (state, action)=> {
            const item = action.payload
            state.cartItems = state.cartItems.filter((x)=> x._id !== item)
            return updateCart(state)
        },
        saveShippingAddress: (state, action)=> {
            state.shippingAddres = action.payload
            return updateCart(state)
        },
        savePaymentMethod: (state, action)=> {
            state.paymentMethod = action.payload
            return updateCart(state)
        }

    }
})


export const { addToCart, updateCartQty, removeItem, saveShippingAddress, savePaymentMethod } = cartSlice.actions
export default cartSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || []
}

const addToCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})

export {addToCartSlice}
export const {addToCart} = addToCartSlice.actions;
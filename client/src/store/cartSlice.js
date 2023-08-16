import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [{
      id: '',
      title: '',
      desc: '',
      imgUrl: '',
      creator: '',
      categories: [''],
      price: 0
    }]
  },
  reducers: {
    updateCartData: (state, action) => {
      state.cartData = action.payload.cartData
    },
    addToCart: (state, action) => {
      const cart = state.cartData;
      const item = action.payload;
      const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

      if (!isItemInCart) {
        state.cartData = [...cart, item];
        console.log(state.cartData);
      } else {
        console.log('Item is already in cart.');
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const updatedCartItems = state.cartData.filter((item) => item.id !== idToRemove);
      state.cartData = [...updatedCartItems];
      console.log(state.cartData);
    },
    emptyCart: (state) => {
      state.cartData = [];
      console.log('Cart is now empty.');
    },
  },
});

export const { updateCartData, addToCart, removeFromCart, emptyCart } =
cartSlice.actions;

export default cartSlice.reducer;
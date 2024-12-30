import { configureStore, createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.uniqueId !== action.payload);
    }
  }
});
export const { addToCart, removeFromCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});
export default store;


// ******** SAME IF YOU WANT IMPLEMENT BY USING REDUX ONLY ********



// import { createStore } from 'redux';

// // Action Types
// const ADD_TO_CART = 'ADD_TO_CART';
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// // Action Creators
// export const addToCart = (item) => ({
//   type: ADD_TO_CART,
//   payload: item
// });

// export const removeFromCart = (uniqueId) => ({
//   type: REMOVE_FROM_CART,
//   payload: uniqueId
// });

// // Initial State
// const initialState = {
//   items: []
// };

// // Reducer
// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         items: state.items.filter(item => item.uniqueId !== action.payload)
//       };
//     default:
//       return state;
//   }
// };

// // Create Store
// const store = createStore(cartReducer);

// export default store;

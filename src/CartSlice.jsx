import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add a plant to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increase quantity if already in cart
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item
      }
    },

    // Remove a plant from the cart by name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    // Update quantity of a cart item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators to use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as default to include in store.js
export default CartSlice.reducer;

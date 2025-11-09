import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add a plant to the cart
    addItem: (state, action) => {
      state.items.push(action.payload); // push the plant object to the items array
    },

    // Remove a plant from the cart by name
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload.name
      );
    },

    // Update quantity if needed (optional)
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const plant = state.items.find(item => item.name === name);
      if (plant) plant.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

    
    

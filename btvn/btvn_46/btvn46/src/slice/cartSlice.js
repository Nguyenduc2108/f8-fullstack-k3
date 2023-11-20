import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  items: savedCart?.items || {},
  totalQuantity: savedCart?.totalQuantity || 0,
  totalPrice: savedCart?.totalPrice || 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items[newItem._id];

      if (existingItem) {
        existingItem.quantityItem += 1;
      } else {
        state.items[newItem._id] = {
          ...newItem,
          quantityItem: 1,
        };
      }

      state.totalQuantity += 1;
      state.totalPrice = Object.values(state.items).reduce(
        (total, item) => total + item.price * item.quantityItem,
        0
      );

      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        })
      );
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId]) {
        state.items[itemId].quantityItem += 1;
        state.items[itemId].quantity -= 1;
        state.totalQuantity += 1;
      }
      state.totalPrice = Object.values(state.items).reduce(
        (total, item) => total + item.price * item.quantityItem,
        0
      );
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        })
      );
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId] && state.items[itemId].quantityItem > 1) {
        state.items[itemId].quantityItem -= 1;
        state.items[itemId].quantity += 1;
        state.totalQuantity -= 1;
      }
      state.totalPrice = Object.values(state.items).reduce(
        (total, item) => total + item.price * item.quantityItem,
        0
      );
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        })
      );
    },

    deleteFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId]) {
        state.totalQuantity -= state.items[itemId].quantityItem;
        delete state.items[itemId];
      }

      state.totalPrice = Object.values(state.items).reduce(
        (total, item) => total + item.price * item.quantityItem,
        0
      );

      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        })
      );
    },

    clearCart: (state) => {
      state.items = {};
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        })
      );
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

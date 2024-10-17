import { createSlice, configureStore } from "@reduxjs/toolkit";
const toggleState = {
  toggle: false,
};
const initialcartState = { cartAmount: [], cartTotalAmount: [] };

let cart = createSlice({
  name: "ui",
  initialState: toggleState,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

let addToCart = createSlice({
  name: "cart",
  initialState: initialcartState,
  reducers: {
    addCartItems(state, action) {
      //  state.cartAmount.push(action.payload);
      let newItem = action.payload;
      let getItem = state.cartAmount.find((item) => item.id === newItem.id);
      if (!getItem) {
        state.cartAmount.push({
          id: newItem.id,
          name: newItem.name,
          amount: newItem.price,
          quantity: 1,
        });
      } else {
        getItem.quantity++;
        getItem.amount = +getItem.amount + +newItem.price;
      }
    },
    removeCart(state, action) {},
  },
});

export let { addCartItems } = addToCart.actions;
export let actions = cart.actions;

let store = configureStore({
  reducer: { cart: cart.reducer, addcart: addToCart.reducer },
});
console.log();
export default store;

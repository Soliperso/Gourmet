import { createContext } from 'react';

const CartContext = createContext({
  cart: [],
  totalAmount: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default CartContext;

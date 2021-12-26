import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  cart: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartActions] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCartActions({ type: 'ADD_ITEM', item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartActions({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = {
    cart: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addItemToCartHandler,
    removeFromCart: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;

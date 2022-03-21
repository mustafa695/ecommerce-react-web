function addCart(cartItem) {
  return {
    type: "ADD_TO_CART",
    cartItem: cartItem,
  };
}

function removeFromCart(cartItem) {
  return {
    type: "REMOVE_CART_ITEM",
    cartItem: cartItem,
  };
}

function increment(cartItem, ind) {
  return {
    type: "QUANTITY_INCREMENT",
    cartItem: cartItem,
    ind: ind,
  };
}

function decrement(cartItem, ind) {
  return {
    type: "QUANTITY_DECREMENT",
    cartItem: cartItem,
    ind: ind,
  };
}

export { addCart, removeFromCart, increment, decrement };

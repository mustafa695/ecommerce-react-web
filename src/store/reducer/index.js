const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        data: [...state.data, action.cartItem],
      };
    }
    case "REMOVE_CART_ITEM": {
      let remove = [...state.data].filter(
        (item) => item.id !== action.cartItem.id
      );

      return {
        ...state,
        data: remove,
      };
    }

    case "QUANTITY_INCREMENT": {
      let dup = [...state.data];
      dup[action.ind].quant++;

      return {
        ...state,
        data: dup,
      };
    }

    case "QUANTITY_DECREMENT": {
      let dup = [...state.data];
      dup[action.ind].quant--;
      return {
        ...state,
        data: dup,
      };
    }

    default:
      return state;
  }
};
export default reducer;

const reducer = (state = {}, action) => {
  const { name, description, price, quantity, id } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          price: price,
          quantity: quantity,
          id: id
        }
      });
    case "DELETE_ITEM":
      let newState = { ...state };
      delete newState[id];
      return newState;
    case "INCREMENT_ITEM_QUANTITY":
      // Old Version not using Object.assign
      // return { 
      //   ...state,
      //   [id]: {
      //     ...state[id],
      //     quantity: newQuantity
      //   }
      // };
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          quantity: state[id].quantity + 1
        }
      });
    default:
      return state;
  }
};

export default reducer;
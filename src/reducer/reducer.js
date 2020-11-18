const initialState = {
  itemID: '',
  item: null
}

const extend = (a, b) => {
  return Object.assign({}, a, b);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM_ID':
      return extend(state, {itemID: action.payload});
    case 'SET_ITEM':
      return extend(state, {item: action.payload});
    default:
      return state;
  }
}

export default reducer;

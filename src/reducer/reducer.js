const initialState = {
  itemID: '',
  item: null,
  dataList: '',
  randomChar: ''
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
    case 'SET_DATA_LIST':
      return extend(state, {dataList: action.payload});
    case 'SET_RANDOM_CHAR':
      return extend(state, {randomChar: action.payload});
    default:
      return state;
  }
}

export default reducer;

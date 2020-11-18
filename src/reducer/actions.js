const ActionCreator = {
  setItemID: (id) => {
    return {
      type: 'SET_ITEM_ID',
      payload: id
    };
  },
  setItem: (item) => {
    return {
      type: 'SET_ITEM',
      payload: item
    }
  },
  loadItem: (id, method) => (dispatch, getState, GotService) => {
    return GotService[method](id)
      .then((response) => {
        dispatch(ActionCreator.setItem(response));
      })
      .catch((err) => {
        throw err;
      });
  }
}


export default ActionCreator;

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

  setData: (data) => {
    return {
      type: 'SET_DATA_LIST',
      payload: data
    }
  },

  setRandomChar: (char) => {
    return {
      type: 'SET_RANDOM_CHAR',
      payload: char
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
  },

  loadData: (method) => (dispatch, getState, GotService) => {
    return GotService[method]()
      .then((response) => {
        dispatch(ActionCreator.setData(response));
      })
      .catch((err) => {
        throw err;
      });
  },

  loadRandomChar: (id) => (dispatch, getState, GotService) => {
    return GotService.getCharacter(id)
      .then((response) => {
        dispatch(ActionCreator.setRandomChar(response));
      })
      .catch((err) => {
        throw err;
      });
  }
}

export default ActionCreator;

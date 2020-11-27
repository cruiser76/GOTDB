import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreator from '../../../reducer/data/actions.js';

import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage/errorMessge.js';
import {withRouter} from 'react-router-dom';
import WithData from '../../hocs/withData.js';

const WrappedBookList = WithData(ItemList, 'getAllBooks');

class BookPage extends Component {

  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }

    return (
      <WrappedBookList
        onItemSelected={(itemID) => {
          this.props.history.push(itemID);
          this.props.loadItem(itemID, 'getBook');
        }}
        renderItem={({name, released}) => `${name} (${released})`}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const {loadItem} = bindActionCreators(ActionCreator, dispatch);
  return {
    loadItem: (id, method) => loadItem(id, method),
  };
}

export default connect(() => ({}), mapDispatchToProps)(withRouter(BookPage));

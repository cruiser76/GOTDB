import React, {Component} from 'react';
import ItemList from '../../itemList';
import GotService from '../../../services/gotService.js';
import ErrorMessage from '../../errorMessage/errorMessge.js';
import {withRouter} from 'react-router-dom';
import WithData from '../../hocs/withData.js';

const {getAllBooks} = new GotService();

const WrappedBookList = WithData(ItemList, getAllBooks);

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
        }}
        renderItem={({name, released}) => `${name} (${released})`}
      />
    );
  }
}

export default withRouter(BookPage);

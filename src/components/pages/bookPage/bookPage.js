import React, {Component} from 'react';
import ItemList from '../../itemList';
import GotService from '../../../services/gotService.js';
import ErrorMessage from '../../errorMessage/errorMessge.js';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {

  state = {
    error: false
  }

  gotService = new GotService();

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }

    return (
      <ItemList
        onItemSelected={(itemID) => {
          this.props.history.push(itemID);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({name, released}) => `${name} (${released})`}
      />
    );
  }
}

export default withRouter(BookPage);

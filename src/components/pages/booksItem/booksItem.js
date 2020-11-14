import React, {Component} from 'react';
import ItemDetails from '../../itemDetails';
import Field from '../../field/field.js';
import GotService from '../../../services/gotService.js';

class BooksItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <ItemDetails
        itemID={this.props.bookID}
        getData={this.gotService.getBook}
      >
        <Field
          field='publisher'
          label='Publisher'
        />
        <Field
          field='numberOfPages'
          label='Number of pages'
        />
        <Field
          field='released'
          label='Released'
        />
      </ItemDetails>
    );
  }
}

export default BooksItem;

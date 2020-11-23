import React, {Component} from 'react';
import ItemDetails from '../../itemDetails';
import Field from '../../field/field.js';

class BooksItem extends Component {

  render() {
    return (
      <ItemDetails
        bookID={this.props.bookID}
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

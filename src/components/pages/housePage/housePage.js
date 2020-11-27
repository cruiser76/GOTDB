import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreator from '../../../reducer/data/actions.js';

import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import Field from '../../field/field.js';
import ErrorMessage from '../../errorMessage/errorMessge.js';
import RowBlock from '../../rowBlock/rowBlock.js';
import WithData from '../../hocs/withData.js';

const WrappedHouseList = WithData(ItemList, 'getAllHouses');

class HousePage extends Component {
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  onItemSelected = (id) => {
    this.props.loadItem(id, 'getHouse');
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }

    const itemList = (
      <WrappedHouseList
        onItemSelected={this.onItemSelected}
        renderItem={({name}) => `${name}`}
      />
    );

    const houseDetails = (
      <ItemDetails>
        <Field
          field='region'
          label='Region'
        />
        <Field
          field='words'
          label='Words'
        />
        <Field
          field='titles'
          label='Titles'
        />
        <Field
          field='overlord'
          label='Overlord'
        />
        <Field
          field='ancestralWeapons'
          label='Ancestral weapons'
        />
      </ItemDetails>
    );

    return (
      <RowBlock
        left={itemList}
        right={houseDetails}
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

export default connect(() => ({}), mapDispatchToProps)(HousePage);

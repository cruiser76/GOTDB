import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import Field from '../../field/field.js';
import GotService from '../../../services/gotService.js';
import ErrorMessage from '../../errorMessage/errorMessge.js';
import RowBlock from '../../rowBlock/rowBlock.js';

class HousePage extends Component {

  state = {
    selectedHouse: 10,
    error: false
  }

  gotService = new GotService();

  componentDidCatch() {
    this.setState({error: true})
  }

  onItemSelected = (id) => {
    this.setState({selectedHouse: id});
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => `${name}`}
      />
    );

    const houseDetails = (
      <ItemDetails
        itemID={this.state.selectedHouse}
        getData={this.gotService.getHouse}
      >
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

export default HousePage;

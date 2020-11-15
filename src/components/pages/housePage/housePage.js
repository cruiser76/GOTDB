import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import Field from '../../field/field.js';
import GotService from '../../../services/gotService.js';
import ErrorMessage from '../../errorMessage/errorMessge.js';
import RowBlock from '../../rowBlock/rowBlock.js';
import WithData from '../../hocs/withData.js';

const {getAllHouses, getHouse} = new GotService();

const WrappedHouseList = WithData(ItemList, getAllHouses);

class HousePage extends Component {

  state = {
    selectedHouse: 10,
    error: false
  }

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
      <WrappedHouseList
        onItemSelected={this.onItemSelected}
        renderItem={({name}) => `${name}`}
      />
    );

    const houseDetails = (
      <ItemDetails
        itemID={this.state.selectedHouse}
        getData={getHouse}
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

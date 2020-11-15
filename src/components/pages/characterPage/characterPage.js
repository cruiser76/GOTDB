import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import Field from '../../field/field.js';
import GotService from '../../../services/gotService.js';
import ErrorMessage from '../../errorMessage/errorMessge.js';
import RowBlock from '../../rowBlock/rowBlock.js';
import WithData from '../../hocs/withData.js';

const {getAllCharacters, getCharacter} = new GotService();

const WrappedCharacterList = WithData(ItemList, getAllCharacters);

class CharacterPage extends Component {

  state = {
    selectedChar: 130,
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  onItemSelected = (id) => {
    this.setState({selectedChar: id});
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }

    const itemList = (
      <WrappedCharacterList
        onItemSelected={this.onItemSelected}
        renderItem={({name, gender}) => `${name} (${gender})`}
      />
    );

    const charDetails = (
      <ItemDetails
        itemID={this.state.selectedChar}
        getData={getCharacter}
      >
        <Field 
          field='gender' 
          label='Gender'
        />
         <Field 
          field='born' 
          label='Born'
        />
         <Field 
          field='died' 
          label='Died'
        />
         <Field 
          field='culture' 
          label='Culture'
        />
      </ItemDetails>
    );

    return (
      <RowBlock 
        left={itemList}
        right={charDetails}
      />
    );
  }
}

export default CharacterPage;

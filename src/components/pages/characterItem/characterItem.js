import React, {Component} from 'react';
import ItemDetails from '../../itemDetails';
import Field from '../../field/field.js';
import GotService from '../../../services/gotService.js';

class CharacterItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <ItemDetails
        itemID={this.props.characterID}
        getData={this.gotService.getCharacter}
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
  }
}

export default CharacterItem;

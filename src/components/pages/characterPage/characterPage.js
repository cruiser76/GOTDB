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

const WrappedCharacterList = WithData(ItemList, 'getAllCharacters');

class CharacterPage extends Component {

  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  onItemSelected = (id) => {
    this.props.loadItem(id, 'getCharacter');
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
      <ItemDetails>
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

const mapDispatchToProps = (dispatch) => {
  const {loadItem} = bindActionCreators(ActionCreator, dispatch);
  return {
    loadItem: (id, method) => loadItem(id, method),
  };
}

export default connect(() => ({}), mapDispatchToProps)(CharacterPage);

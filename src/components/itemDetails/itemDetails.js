import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreator from '../../reducer/actions.js';
import './itemDetails.css';

const ItemDetails = (props) => {
    if (!props.item) {
        if (props.bookID) {
            props.loadItem(props.bookID, 'getBook');
        }
        return <span style={{color: 'white'}}>Select a item</span>
    }

    const {item: {name}, item} = props;

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
}

const mapStateToProps = ({item}) => {
    return {
        item,
    };
};

const mapDispatchToProps = (dispatch) => {
    const {loadItem} = bindActionCreators(ActionCreator, dispatch);
    return {
      loadItem: (id, method) => loadItem(id, method),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

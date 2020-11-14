import React, {Component} from 'react';
import './itemDetails.css';

class ItemDetails extends Component {

    state = {
        item: null
    }

    updateItem() {
        const {itemID, getData} = this.props;
        if (!itemID) {
            return;
        }

        getData(itemID)
            .then((item) => this.setState({item}));
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevprops) {
        if (prevprops.itemID !== this.props.itemID) {
            this.updateItem();
        }
    }

    render() {
        if (!this.state.item) {
            return <span style={{color: 'white'}}>Select a character</span>
        }

        const {item: {name}, item} = this.state

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ItemDetails;

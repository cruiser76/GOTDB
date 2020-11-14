import React, {Component} from 'react';
import Spinner from '../spinner/spinner.js';
import './itemList.css';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => this.setState({itemList}))
    }

    renderItems(arr) {
        return arr.map((el) => {
            const {id} = el;
            const label = this.props.renderItem(el);
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const content = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {content}
            </ul>
        );
    }
}
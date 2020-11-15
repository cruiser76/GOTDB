import React from 'react';
import './itemList.css';

const ItemList = ({data, renderItem, onItemSelected}) => {

    const content = data.map((el) => {
        const {id} = el;
        const label = renderItem(el);
        return (
            <li
                className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {content}
        </ul>
    );
}

export default ItemList;

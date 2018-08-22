import React from 'react';

class ListItem extends React.Component {

    render() {

        const { deleteItem, item } = this.props;

        return (
            <li className="item">
                {item}
                <button 
                    className="item-button"
                    onClick={deleteItem}
                >
                    Delete Item
                </button>
            </li>
        )
    }
}


export default ListItem;

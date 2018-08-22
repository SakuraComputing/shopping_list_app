import React from 'react'

const ListItem = (props) => (
    <ul>
        {
            props.items.map((item, key) => <li key={key}>{item}</li>)    
        }
    </ul>
);
export default ListItem;

import React from 'react';

function ItemsList() {
    const items = ['apple', 'orange', 'banana'];
    return (
        <ul>
            {items.map((item, index) => (
                <Item key={index} name={item} /> // Corrected: added return for the Item component
            ))}
        </ul>
    );
}

function Item({ name }) {
    return <li>{name}</li>;
}

export default ItemsList;

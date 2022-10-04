/* The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0. */

const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};

ShoppingCart.defaultProps = {items: 0};

/* The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component. */
/* The ShoppingCart component now renders a child component Items. 
This Items component has a default prop quantity set to the integer 0. 
Override the default prop by passing in a value of 10 for quantity. */

import React from 'react';

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: 
        {props.quantity}
    </h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart1 extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Items quantity = {10}/>
        )}
}





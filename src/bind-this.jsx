/* In addition to setting and updating state, you can also define methods for your component class. 
A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. 
There are a few ways to allow your class methods to access this. */

/* Add a click handler to the button element in the render method. It should trigger the handleClick() method when the button receives a click event. Remember that the method you pass to the onClick handler needs curly braces because it should be interpreted directly as JavaScript. */

import React from 'react';

class BindThis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default BindThis;



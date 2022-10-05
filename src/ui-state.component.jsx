// In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state.

import React from 'react';

class UiStateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        return (
            <div>
                {/* change code here */}
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default UiStateComponent;


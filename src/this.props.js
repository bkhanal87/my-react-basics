/* Render an instance of the Welcome component in the parent component App. 
Here, give Welcome a prop of name and assign it a value of a string. 
Within the child, Welcome, access the name prop within the strong tags. */

import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Welcome name='string'/>
            </div>
        );
    }
};

class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <p>Hello, <strong>{this.props.name}</strong>!</p>
            </div>
        );
    }
};
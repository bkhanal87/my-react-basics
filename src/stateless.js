/* There are two ways to create a React component. 
The first way is to use a JavaScript function. 
Defining a component in this way creates a stateless functional component. */

import React from "react";
import ReactDOM from "react-dom";

const MyComponent = function() {
    return (
        <div>
            "Hello there"
        </div>
    );
};

ReactDOM.render(MyComponent, document.getElementById('root'));

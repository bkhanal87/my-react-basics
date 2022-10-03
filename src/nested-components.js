/* Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components. 

There are two functional components defined in the code editor, called TypesOfFruit and Fruits. Take the TypesOfFruit component and compose it, or nest it, within the Fruits component. Then take the Fruits component and nest it within the TypesOfFood component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own! */

const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Bananas</li>
                <li>Oranges</li>
                <li>Kiwi</li>
                <li>Strawberry</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
            </div>
        );
    }
}; 
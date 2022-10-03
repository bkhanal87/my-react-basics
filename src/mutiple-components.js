/* To compose multiple components together, create a parent component which renders each of these components as children components.
In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. 
Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash. */

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                <ChildComponent />
            </div>
        );
    }
}; 
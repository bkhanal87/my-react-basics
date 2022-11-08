import React from "react";


function App() {
    const stories = [
        {
            title: 'JavaScript',
            id: 1,
            author: 'John Doe',
        },
        {
            title: 'HTML5',
            id: 2,
            author: 'Bob Smith',
        },
        {
            title: 'CSS3',
            id: 3,
            author: 'John Cena',
        },
    ]
    return (
        <div>
            <List list={stories} />
        </div>
    )
}



function List(props) {
    return (
        <ul>
            {props.list.map((item) => {
                <li key={item.id}>
                    {item.title}
                </li>
            })}
        </ul>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
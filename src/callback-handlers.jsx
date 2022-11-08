// A callback handler gets introduced as event handler (A),
// is passed as functions in props to another component (B),
// is executed there as callback handler(C),
// calls back to the place it was introduced (D)

const App = () => {
    const stories = [];

    //A 
    const handleSearch = (event) => {
        // D
        console.log(event.target.value);
    };

    return(
        <div>
            <h1>My Hacker Stories</h1>

            {/* B */}
            <Search onSearch={handleSearch}/>
        </div>
    )
}

const Search = (props) => {
    const[searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);

    // C 
    props.onSearch(event);
    }
}


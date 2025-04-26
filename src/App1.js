import React from 'react';
import './App.css'; // Optional CSS import

const Search = () => {
    const handleChange = (event) => {
        // Synthetic React event
        console.log('Event object:', event);
        
        // Current input value
        console.log('Input value:', event.target.value);
    };

    return (
        <div className="search-container">
            <label htmlFor="search" className="search-label">
                Search: 
            </label>
            <input
                id="search"
                type="text"
                onChange={handleChange}
                className="search-input"
                placeholder="Type to search..."
            />
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Search Demo</h1>
                <Search />
            </header>
        </div>
    );
}

export default App;
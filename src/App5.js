import React from 'react';

const list = [
    { objectID: 1, title: 'First Item' },
    { objectID: 2, title: 'Second Item' },
    { objectID: 3, title: 'Third Item' }
];

const App = () => (
    <div>
        <Search />
        <List />
    </div>
);

const Search = () => {
    const handleChange = (event) => {
        console.log(event);
        console.log(event.target.value);
    };

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                type="text"
                onChange={handleChange}
            />
        </div>
    );
};

const List = () => (
    <ul>
        {list.map(item => (
            <li key={item.objectID}>
                {item.title}
            </li>
        ))}
    </ul>
);

export default App;
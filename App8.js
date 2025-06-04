import React, { useState } from 'react';

const initialStories = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStories = initialStories.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>My Hacker Stories</h1>
            <InputWithLabel
                id="search"
                value={searchTerm}
                isFocused
                onInputChange={handleSearch}
                type="text"
            >
                <strong>Search:</strong>
            </InputWithLabel>
            <List list={filteredStories} />
        </div>
    );
};

const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {
    return (
        <>
            <label htmlFor={id}>
                {children}
            </label>
            &nbsp;
            <input
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
                autoFocus={isFocused}
            />
        </>
    );
};

const List = ({ list }) => (
    <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
    </ul>
);

const Item = ({ item }) => (
    <li>
        <a href={item.url}>{item.title}</a> by {item.author}
    </li>
);

export default App;

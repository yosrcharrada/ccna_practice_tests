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
    const [stories, setStories] = useState(initialStories);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRemoveStory = (item) => {
        const newStories = stories.filter((story) => story.objectID !== item.objectID);
        setStories(newStories);
    };

    const filteredStories = stories.filter((story) =>
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
            <List list={filteredStories} onRemoveItem={handleRemoveStory} />
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

const List = ({ list, onRemoveItem }) => (
    <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        ))}
    </ul>
);

const Item = ({ item, onRemoveItem }) => (
    <li>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        &nbsp;by {item.author}
        &nbsp;
        <button type="button" onClick={() => onRemoveItem(item)}>
            Dismiss
        </button>
    </li>
);

export default App;

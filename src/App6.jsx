import React, { useState } from 'react';

const App = () => {
    const stories = [
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

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h1>My Hacker Stories</h1>
            <Search />
            <p>Searching for <strong>{searchTerm}</strong></p>
            <List list={stories} />
        </div>
    );
};

const Search = () => (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
    </div>
);

const List = (props) => (
    <ul>
        {props.list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
    </ul>
);

const Item = (props) => (
    <li>
        <a href={props.item.url}>{props.item.title}</a>
    </li>
);

export default App;

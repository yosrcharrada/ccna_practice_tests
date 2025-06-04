import React from 'react';

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

    return (
        <div>
            <h1>My Hacker Stories</h1>
            <List list={stories} />
        </div>
    );
};

const List = (props) => (
    <ul>
        {props.list.map((item) => (
            <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
            </li>
        ))}
    </ul>
);

export default App;

import React from 'react';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {
    const [searchTerm, setSearchTerm] = React.useState('React');
    const [stories, setStories] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [url, setUrl] = React.useState(`${API_ENDPOINT}React`);

    React.useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setStories(result.hits);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setIsError(true);
            });
    }, [url]);

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        setUrl(`${API_ENDPOINT}${searchTerm}`);
    };

    const handleRemoveStory = (item) => {
        const newStories = stories.filter(
            (story) => story.objectID !== item.objectID
        );
        setStories(newStories);
    };

    return (
        <div>
            <h1>My Hacker News App</h1>
            <input type="text" value={searchTerm} onChange={handleSearchInput} />
            <button type="button" onClick={handleSearchSubmit} disabled={!searchTerm}>
                Submit
            </button>
            <hr />
            {isError && <p>Something went wrong ...</p>}
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                <List list={stories} onRemoveItem={handleRemoveStory} />
            )}
        </div>
    );
};

const List = ({ list, onRemoveItem }) =>
    list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ));

const Item = ({ item, onRemoveItem }) => (
    <div>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span> by {item.author}</span>
        <span> | {item.num_comments} comments</span>
        <span> | {item.points} points</span>
        <button type="button" onClick={() => onRemoveItem(item)}>
            Remove
        </button>
    </div>
);

export default App;

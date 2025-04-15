import React, { useState } from "react";
const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];



function List({ items }) {
    return (
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    );
  }




  function Search({ searchTerm, onSearchChange }) {
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(event)}{onSearchChange} => onSearch ( event , target , value )}
        />
      </div>
    );
  }

  
  function App() {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredList = list.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>My Hacker Stories</h1>
        <Search
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <hr />
        <List list={filteredList} />
      </div>
    );
  }
  
  export default App;


import React from 'react';

const externalTitle = 'External Variable Title';
const user = { firstName: 'Alice', lastName: 'Doe' };

const App = () => {
    const internalTitle = 'Internal Variable Title';

    const greetUser = () => {
        return `Hello, ${user.firstName} ${user.lastName}!`;
    };

    return (
        <div>
            <h1>{externalTitle}</h1>
            <h2>{internalTitle}</h2>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" />
            <p>User: {user.firstName} {user.lastName}</p>
            <p>{greetUser()}</p>
        </div>
    );
};

export default App;

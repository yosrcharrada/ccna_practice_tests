import React from 'react';

const externalTitle = 'External Variable Title';

const App = () => {
    const internalTitle = 'Internal Variable Title';

    return (
        <div>
            <h1>{externalTitle}</h1>
            <h2>{internalTitle}</h2>
        </div>
    );
};

export default App;

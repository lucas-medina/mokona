// Import REACT and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component
const App = () => {
    return <div>Hi there!</div>
}

// Take the component, show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
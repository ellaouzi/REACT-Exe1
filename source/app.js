import React from 'react';
import ReactDOM from 'react-dom';
const reactElement = React.createElement(
    'h1', {
        className: 'header'
    }, 'ELLAOUZI Mohamed'
);
ReactDOM.render(
    reactElement,
    document.getElementById('react-application')
);
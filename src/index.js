import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <h2 className="text-center">
            {props.headerMessage}
        </h2>
    );
};

App.propTypes = {
    headerMessage: React.ProtoTypes.string
};

ReactDOM.render(
    <App headerMessage="Hello props!"/>,
    document.getElementById('root')        
);


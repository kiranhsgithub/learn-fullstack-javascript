import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ message }) => {
  return (
    <h2 className="text-center">
        {message}
    </h2>
  );  
};

const App = (props) => {
    return (
        <div>
            <Header message="Naming Contests" />
            <div>
               ...
            </div>
        </div>        
    );
};

App.propTypes = {
    headerMessage: React.PropTypes.string
};

App.defaultProps = {
    headerMessage : "Hello Default!!"
};

ReactDOM.render(
    <App />,
    document.getElementById('root')        
);


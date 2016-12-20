import React from 'react';
import Header from './Header'

class App extends React.Component {
    
    state = {
        pageHeader: 'Naming Contests'
    };

    componentDidMount() {
        //timers, listeners, ajax
        //things that happen after dom is laoded
    }

    componentWillUnmount() {
        //clean timers, listeners
    }

    
    
    render() {
         return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                   ...
                </div>
            </div>        
        );   
    }
};

export default App;
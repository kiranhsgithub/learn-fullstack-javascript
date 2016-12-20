import React from 'react';
import Header from './Header'

class App extends React.Component {
    
    state = {test: 37};
    
    render() {
         return (
            <div className="App">
                <Header message="Naming Contests" />
                <div>
                   {this.state.test}
                </div>
            </div>        
        );   
    }
};

export default App;
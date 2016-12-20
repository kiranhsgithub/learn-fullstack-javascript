import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };

    componentDidMount() {
        //timers, listeners, ajax
        //things that happen after dom is loaded
        axios.get('/api/contests')
            .then(response => {
                this.setState({
                   contests: response.data.contests 
                });
            })
            .catch(console.error);
            
    }

    componentWillUnmount() {
        //clean timers, listeners
    }

    
    
    render() {
         return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                {this.state.contests.map(contest => 
                    <ContestPreview key={contest.id} {...contest} />
                )}
                </div>
            </div>        
        );   
    }
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './ref/UserSearch';

class App extends React.Component {
    render() {
        return <div>
            <UserSearch />
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
import React from 'react';
import ReactDOM from 'react-dom';
import GuestList from './state/GuestList'
class App extends React.Component {
    render() {
        return <div>
            <GuestList />
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
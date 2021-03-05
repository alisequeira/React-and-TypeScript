import React from 'react';
import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';

class App extends React.Component {
    render() {
        return <div>
            <EventComponent />
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
import { Provider } from 'react-redux'; //Component used to get access to our redux store throughout all different components
import { store } from '../state';
import RepositoriesList from './RepositoriesList';
const App = () => {
    return <Provider store={store}>
        <div>
            <h1>Search For a Package</h1>
            <RepositoriesList />
        </div>
    </Provider>
};

export default App;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

//1.reducers 2. initial state, 3. applyMiddleware +  thunk
export const store = createStore(reducers, {}, applyMiddleware(thunk));
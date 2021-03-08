import { useDispatch } from 'react-redux'; //allows to dispatch an action into all of our different reducers

// Turns an object whose values are action-creators, into an object with the same keys
//but with every action creator wrapped into a dispatch call, so they can be invoked directly.
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch)
};
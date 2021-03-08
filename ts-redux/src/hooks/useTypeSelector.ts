import { useSelector, TypedUseSelectorHook } from 'react-redux'; //useSelector: this hook is similar in nature to the mapStateToProp function
import { RootState } from '../state';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
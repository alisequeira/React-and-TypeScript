import { useState } from 'react';
import { useDispatch } from 'react-redux' //we can use this function to manually dispatch an action creator
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        dispatch(actionCreators.searchRepositories(term));
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
    </div>
};

export default RepositoriesList;
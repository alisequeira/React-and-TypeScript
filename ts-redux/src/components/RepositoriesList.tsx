import { useState } from 'react';
import { useSelector } from 'react-redux'//this hook is similar in nature to the mapStateToProp function 
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { loading, error, data } = useSelector((state: any) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        searchRepositories(term);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
    </div>
};

export default RepositoriesList;
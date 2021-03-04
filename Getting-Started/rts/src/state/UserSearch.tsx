import { useState } from 'react';

const users = [
    { name: "Ali", age: 21 },
    { name: "Cirilo", age: 5 },
    { name: "Fernanda", age: 20 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onClick = (): void => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return <>
        <div>
            User Search
                <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={onClick}>Search User</button>
        </div>
        <div>
            {user && user.name}
        </div>
    </>
}

export default UserSearch;
import { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}
interface UserSearchProps {
    users: User[]
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    };

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });
        this.setState({ user: foundUser });
    }

    render() {
        const { user, name } = this.state;
        return (
            <>
                <div>
                    User Search
                        <input value={name} onChange={(e) => this.setState({ name: e.target.value })}></input>
                    <button onClick={this.onClick}>Search User</button>
                </div>
                <div>
                    {user && user.name}
                    {user && user.age}
                </div>
            </>
        )
    }
}

export default UserSearch;
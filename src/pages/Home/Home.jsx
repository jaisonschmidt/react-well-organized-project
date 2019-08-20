import React from 'react';
import UserService from '../../services/UserService/UserService';

import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            users: []
        }

        this.userService = new UserService();
    }

    componentDidMount() {
        this.userService.getAllUsers().then( users => this.setState( { users } ) )
    }

    renderUserList() {
        return this.state.users.map( (user, key) => {
            return (
                <li key={key}>
                    <Link to={`/user/${user.id}`}>
                        {user.name}
                    </Link>
                </li>
            )
        } )
    }

    render(){
        return (
            <div>
                <h2>User List</h2>

                <ul>
                    { this.renderUserList() }
                </ul>

            </div>
        )
    }
}

export default Home;

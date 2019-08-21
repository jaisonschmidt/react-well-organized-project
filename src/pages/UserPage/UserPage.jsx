import React from 'react';
import UserService from '../../services/UserService/UserService';

import { Link } from 'react-router-dom';

class UserPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }

        this.userService = new UserService();
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.userService.getUser(id).then( user => this.setState({user}) );
    }

    render(){
        return (
            <div>
                <h1>User page</h1>
                <div>{this.state.user.name}</div>
                <Link to="/">Voltar</Link>
            </div>
        )
    }
}

export default UserPage;
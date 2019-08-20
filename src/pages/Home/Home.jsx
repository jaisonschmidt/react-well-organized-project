import React from 'react';

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            users: []
        }
    }

    render(){
        return (
            <div>
                <h2>User List</h2> Home
            </div>
        )
    }
}

export default Home;

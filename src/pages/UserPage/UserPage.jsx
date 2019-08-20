import React from 'react';

class UserPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }
    }

    render(){
        return (
            <div>
                User page
            </div>
        )
    }
}

export default UserPage;
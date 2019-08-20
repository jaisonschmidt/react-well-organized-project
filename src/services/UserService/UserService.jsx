import Axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com";

class UserService {
    async getAllUsers() {
        const url = `${API_URL}/users/`;
        return Axios.get(url).then( response => response.data )
    }

    async getUser(id) {
        const url = `${API_URL}/users/${id}`;
        return Axios.get(url).then( response => response.data );
    }
}

export default UserService;

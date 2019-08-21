import Axios from 'axios';
import Config from '../../config';

class UserService {
    async getAllUsers() {
        const url = `${Config.URL_API}/users/`;
        return Axios.get(url).then( response => response.data )
    }

    async getUser(id) {
        const url = `${Config.URL_API}/users/${id}`;
        return Axios.get(url).then( response => response.data );
    }

    async postNewUser(user) {
        const url = `${Config.URL_API}/users/`;
        return Axios.post(url, user).then( response => response.data );
    }
}

export default UserService;

import UserService from './UserService';

describe('test services/UserService', () => {

    const userService = new UserService();

    it('verify return based on invalid value', done => {
        userService.getUser(1).then( response => {
            expect(typeof response).toBe('object');
            done();
        });
    })

    it('post a new user', done => {

        const user = {
            "id" : 3,
            "name": "Agamamou"
        }

        userService.postNewUser(user).then( response => {
            console.log(response);
            expect(typeof response).toBe('object');
            done();
        });

        
    })
})


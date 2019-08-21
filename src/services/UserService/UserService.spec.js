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
            "id" : 11,
            "name": "User teste jaison",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
              "street": "Kattie Turnpike",
              "suite": "Suite 198",
              "city": "Lebsackbury",
              "zipcode": "31428-2261",
              "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
              }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
              "name": "Hoeger LLC",
              "catchPhrase": "Centralized empowering task-force",
              "bs": "target end-to-end models"
            }
        }

        userService.postNewUser(user).then( response => {
            console.log(response);
            expect(typeof response).toBe('object');
            done();
        });

        
    })
})


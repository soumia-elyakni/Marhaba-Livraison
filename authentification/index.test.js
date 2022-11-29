const supertest = require ('supertest');
const app = require('./index')

describe('login', ()=> {

    test('login error email', async () => {
        const body = {
            email: 'jkhllhm@gmail.com',
            password: '123'
        }
        const res = await supertest(app).post('/api/user/login').send(body);
        expect(res.statusCode).toBe(400);
    })
})

describe('register', ()=> {
    test('register error', async () =>{
        const body = {
            name:'selya',
            email:'selyakni@gmail.com',
            password:'1234567'
        }
        const res = await supertest(app).post('/api/user/register').send(body);
        expect(res.statusCode).toBe(400)
    })
})
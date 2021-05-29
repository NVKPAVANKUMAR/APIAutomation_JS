const request = require('supertest')('https://gorest.co.in/public-api/');
const expect = require('chai').expect;
const faker = require('faker');
let userId;

describe('Users API Tests', () => {
  it('should add a new user with given values using POST /users ', () => {
    const data = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      gender: 'Male',
      status: 'Active',
    };

    return request
      .post('users')
      .set(
        'Authorization',
        'Bearer 4a464a665556a1a0ee285941dace5770bc4b31333b63b1c1dc38246aa1b12a10'
      )
      .send(data)
      .then((res) => {
        expect(res.body.data.email).to.be.eql(data.email);
        expect(res.body.data.name).to.be.eql(data.name);
        expect(res.body.data.gender).to.be.eql('Male');
        expect(res.body.data.status).to.be.eql('Active');
        console.log(res.body.data);
        userId = res.body.data.id;
      });
  });

  it('should delete the user with given ID using DELETE /users/id', () => {
    return request
      .delete(`users/${userId}`)
      .set(
        'Authorization',
        'Bearer 4a464a665556a1a0ee285941dace5770bc4b31333b63b1c1dc38246aa1b12a10'
      )
      .then((res) => {
        expect(res.body.data).to.be.eql(null);
        console.log(res.body.data);
      });
  });
});

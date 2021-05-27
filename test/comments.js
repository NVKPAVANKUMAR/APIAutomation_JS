const request = require('supertest')("https://gorest.co.in/public-api/");
const expect = require('chai').expect;

describe('Comments API Tests', () => {
    it('should return all the comments using GET /comments', () => {

        return request.get('comments').then((res) => {
            expect(res.statusCode).to.be.eql(200);
            expect(res.body.data).not.to.be.empty;
            expect(res.body.data.length).to.be.eql(20);
        });
    });

    it('should return the comment with ID using GET /comments/id', () => {

        return request.get('comments/45').then((res) => {
            expect(res.body.data).not.to.be.empty;
            expect(res.body.data.id).to.be.eql(45);
            expect(res.body.data.name).to.be.a('string');
        });
    });

});




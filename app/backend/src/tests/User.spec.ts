import * as chai from 'chai';
import { app } from '../app';

// @ts-ignore
import chaiHttp = require('chai-http');


import { Response } from 'superagent';
import {
  loginMockEmailInvalid,
  loginMockPasswordInvalid,
  loginMockWithoutEmail,
  loginMockWithoutPassword
} from './mock/userDataMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing the user route', () => {

  describe('Should be not able to do login without email', () => {
    let chaiHttpResponse: Response;
  
    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginMockWithoutEmail);
    });
  
    it('Expect returns status code of error', async () => {
      expect(chaiHttpResponse).to.have.property('status')
      expect(chaiHttpResponse.status).to.equal(400)
    });

    it('Expect returns message of error', async () => {
      expect(chaiHttpResponse.body).to.have.property('message')
      expect(chaiHttpResponse.body.message).to.equal('All fields must be filled')
    })
  })

  describe('Should be not able to do login without password', () => {
    let chaiHttpResponse: Response;
  
    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginMockWithoutPassword);
    });
  
    it('Expect returns status code of error', async () => {
      expect(chaiHttpResponse).to.have.property('status')
      expect(chaiHttpResponse.status).to.equal(400)
    });

    it('Expect returns message of error', async () => {
      expect(chaiHttpResponse.body).to.have.property('message')
      expect(chaiHttpResponse.body.message).to.equal('All fields must be filled')
    })
  })

  describe('Should be not able to do login with email invalid', () => {
    let chaiHttpResponse: Response;
  
    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginMockEmailInvalid);
    });

    it('Expect returns status code of error', async () => {
      expect(chaiHttpResponse).to.have.property('status')
      expect(chaiHttpResponse.status).to.equal(401)
    });

    it('Expect returns message of error', async () => {
      expect(chaiHttpResponse.body).to.have.property('message')
      expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password')
    })
  })

  describe('Should not be able to login with password length less than 6 ', () => {
    let chaiHttpResponse: Response;
  
    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginMockPasswordInvalid);
    });

    it('Expect returns status code of error', async () => {
      expect(chaiHttpResponse).to.have.property('status')
      expect(chaiHttpResponse.status).to.equal(400)
    });

    it('Expect returns message of error', async () => {
      expect(chaiHttpResponse.body).to.have.property('message')
      expect(chaiHttpResponse.body.message).to.equal('Password must not be at least 6 characters')
    })
  })
});


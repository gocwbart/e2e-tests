import * as sinon from 'sinon';
import { expect } from 'chai';
import UserController from '../users.controller';

describe('User Service', () => {
  describe('get', () => {
    it('should correctly return user JSON', () => {
      const req = {params: {id: 123}};
      const res = {json: sinon.spy()};
      const expected = {
        id: 123,
        name: 'John Smith',
        email: 'john.smith@pearson.com',
        role: 'admin'
      };

      UserController.get(req, res);

      expect(res.json.calledWith(expected)).to.be.true;
    });
  });
});

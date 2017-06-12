/* tslint:disable:no-unused-expression */

import { expect } from 'chai';
import * as sinon from 'sinon';
import UserController from '../users.controller';

describe('User Controller', () => {
  describe('get', () => {
    it('should correctly return user JSON', () => {
      const res = {json: sinon.spy()};
      const expected = {
        name: 'John Smith',
        email: 'john.smith@pearson.com',
        role: 'admin'
      };

      UserController.get({}, res);

      expect(res.json.calledWith(expected)).to.be.true;
    });
  });
});

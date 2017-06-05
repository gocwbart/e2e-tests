var world = (function() {
    var chai = require('chai'),
    chaiAsPromised = require("chai-as-promised");
    chai.use(chaiAsPromised);

    const WAIT_DEFAULT = 5000,
        WAIT_MAX = 60000,
        WAIT_MIN = 2000;

    var expect = chai.expect,
      EC = require('protractor').ExpectedConditions;
      //support = require ('../tests/support/methods/basicSupport.js');

    return {
        expect: expect,
        EC: EC,
       // support: support,
        WAIT_DEFAULT: WAIT_DEFAULT,
        WAIT_MAX: WAIT_MAX,
        WAIT_MIN: WAIT_MIN
    }

}());
module.exports = world;
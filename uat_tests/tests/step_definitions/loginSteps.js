'use strict'
var world = require('../../../uat_tests/config/world.js'),
    pages = require('../../../uat_tests/config/pageCollection.js'),
    config = require('../../config/protractor.cucumber.conf.js');

var loginSteps = function () {
    var loginPage = pages.loginPage;

     this.Given(/^I login to PulseAdminPanel as "([^"]*)" user$/, function (user, callback) {

        var userData = config.config.users[user];

        browser.get(config.config.baseUrl)
            .then(() => {
                return browser.wait(world.EC.presenceOf(loginPage.usernameInput), 9999)
            })
            .then(function () {
                loginPage.writePassword(userData.password);
                return loginPage.writePassword(userData.password);
            })
            .then(function () {
                return loginPage.clickLoginButton();
            })
            .then(function () {
                callback();
            });

    });


};

module.exports = loginSteps;

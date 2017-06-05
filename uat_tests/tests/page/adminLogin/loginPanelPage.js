'use strict';

var Page = require('astrolabe').Page,
    world = require('../../../config/world.js');

var self = Page.create({
    url: {value: '/'},

    usernameInput:{
        get: () => {
            return element (self.by.xpath('//*[@id="inputEmail"]'));
        }
    },

    passwordInput:{
        get: () => {
            return element (self.by.xpath('//*[@id="inputPassword"]'));
        }
    },

    loginButton:{
        get: () => {
            return element (self.by.xpath('//*[@type="submit"] '));
        }
    },

    writeUsername: {
        value: function (userName) {
            return self.usernameInput.sendKeys(userName);
        }
    },

    writePassword: {
        value: function (userPassword) {

            return self.passwordInput.sendKeys(userPassword);

        }
    },

    clickLoginButton: {
        value: function () {
            return self.loginButton.click();
        }


    }

});

module.exports = self;
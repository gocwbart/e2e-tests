var myStepDefinitionsWrapper = function () {

    this.Given(/^I did sth$/, function (callback) {
        callback();
    });


    this.When(/^I do sth more$/, function (callback) {
        callback();
    });

    this.Then(/^I will get sth more$/, function (callback) {
        callback();
    });
};
module.exports = myStepDefinitionsWrapper;
var myStepDefinitionsWrapper = function () {

    this.Given(/^I did sth$/, function (callback) {
        callback.pending();
    });


    this.When(/^I do sth more$/, function (callback) {
        callback.pending();
    });

    this.Then(/^I will get sth more$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;
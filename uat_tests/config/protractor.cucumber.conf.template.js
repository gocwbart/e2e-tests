console.log(this.options);
config = require('../config/protractor.cucumber.conf.js');

exports.config = {
    framework: 'custom',
    directConnect: false,
    frameworkPath: '../../node_modules/protractor-cucumber-framework',
    useAllAngular2AppRoots: true,

    seleniumArgs: [],
    seleniumAddress: '<%= seleniumAddress %>',
    jsonReportsDirOutput: 'uat_tests/reports/json',
    baseUrl: '<%= baseUrl %>',
    users: require('<%= usersJSONPath %>'),
    apiUrl: '<%= apiUrl %>',

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        var disableNgAnimate = function () {
            angular
                .module('disableAnimate', [])
                .run(['$animate', function ($animate) {
                    $animate.enabled(false)
                }]);
        };
        browser.addMockModule('disableNgAnimate', disableNgAnimate);
    },

    verbose: true,

    specs: ['<%= specs %>'],

    multiCapabilities: [

    ],
    cucumberOpts: {
        format: '<%= format %>',
        require: ['../tests/step_definitions/*.js',
            '../tests/step_definitions/**/*.js',
            '../tests/support/methods/testHooks.js',
            'env.js']
    },

    // If you want run more than one browser (For maxSession uncomment also browser Firefox and IE )
    maxSessions: 3,

    allScriptsTimeout: 60000,

    rootElement: 'body',

};

console.log(this.options);
config = require('../config/protractor.cucumber.conf.js');

exports.config = {
    directConnect: false,
    framework: 'custom',
    frameworkPath: '../../node_modules/protractor-cucumber-framework',
    useAllAngular2AppRoots: true,

    seleniumArgs: [],
    seleniumAddress: '<%= seleniumAddress %>',
    jsonReportsDirOutput: 'uat_tests/reports/json',
    baseUrl: '<%= baseUrl %>',
    users: require('<%= usersJSONPath %>'),
    apiUrl: '<%= apiUrl %>',

    verbose: true,

    specs: ['<%= specs %>'],

    multiCapabilities: [

    ],
    cucumberOpts: {
        format: '<%= format %>',
        require: ['../tests/step_definitions/*.js',
            '../tests/step_definitions/**/*.js',
            '../tests/support/methods/testHooks.js']
    },

    // If you want run more than one browser (For maxSession uncomment also browser Firefox and IE )
    maxSessions: 3,

    allScriptsTimeout: 60000,

    rootElement: 'body',

};

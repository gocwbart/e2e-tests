console.log(this.options);
config = require('../config/protractor.cucumber.conf.js');

exports.config = {
    framework: 'custom',
    directConnect: false,
    frameworkPath: '../../node_modules/protractor-cucumber-framework',
    useAllAngular2AppRoots: true,

    seleniumArgs: [],
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    jsonReportsDirOutput: 'uat_tests/reports/json',
    baseUrl: 'https://app-01.demo1.aws-eu-wi.pls.elt.hosts.pearson-intl.net/#/login',
    users: require('../tests/support/users/usersAdminPanel_v1.json'),
    apiUrl: '',

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

    specs: ['./uat_tests/tests/features/**/**.feature'],

    multiCapabilities: [
		{browserName: 'chrome',chromeOptions: {  'args': ['--test-type', 'show-fps-counter=true', '--web-security=no spec.js', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],'prefs': {'download': {'prompt_for_download': false,'default_directory': 'C:\\Users\\Bartek\\PhpstormProjects\\bf-admin-pulse\\uat_tests\\tests\\support\\downloads'}},},}

    ],
    cucumberOpts: {
        format: 'pretty',
		tags: ['@test2'],
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

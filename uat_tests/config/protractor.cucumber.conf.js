console.log(this.options);
config = require('../config/protractor.cucumber.conf.js');

exports.config = {
    directConnect: false,
    framework: 'custom',
    frameworkPath: '../../node_modules/protractor-cucumber-framework',
 //   useAllAngular2AppRoots: true,

    seleniumArgs: [],
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    jsonReportsDirOutput: 'uat_tests/reports/json',
    baseUrl: 'https://stageworld.wallstreetenglish.com.cn',
    users: require('../tests/support/users/usersStageCN.json'),
    apiUrl: 'https://stageworld.wallstreetenglish.com.cn/api/',

    verbose: true,

    specs: ['./uat_tests/tests/features/**/**.feature'],

    multiCapabilities: [
		{browserName: 'chrome',chromeOptions: {  'args': ['--test-type', 'show-fps-counter=true', '--web-security=no spec.js', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],'prefs': {'download': {'prompt_for_download': false,'default_directory': 'C:\\gocwbart\\bf-admin-pulse\\uat_tests\\tests\\support\\downloads'}},},}

    ],
    cucumberOpts: {
        format: 'pretty',
		tags: ['@test1'],
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

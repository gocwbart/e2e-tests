module.exports = function (grunt) {
    var commonOpts = require('./commonOpts');

    grunt.registerTask('prepareOpts', 'Prepare capabilities. ', function () {
        var specs = grunt.option('feature-to-check') || './uat_tests/tests/features/**/**.feature';
        grunt.option('specs', specs);
    });

    grunt.registerTask('addOptsToConfig', 'Adds tags to config file.', function () {
        const defaultBrowser = commonOpts.BROWSERS.chrome;
        var browser = arguments[0] || defaultBrowser;
        commonOpts.insertCapabilities(commonOpts.getCapabilities(browser), grunt);
        commonOpts.getTag(grunt);
    });

    function generateDebug(grunt, envName, browser, withReport, usersJSONPath, seleniumAddress) {
        var tasks = commonOpts.getStartTasks().concat(commonOpts.getRunTasks(':' + browser)),
            format = commonOpts.getReport(withReport),
            withOrWithout = 'without';
        grunt.option('protractorEnv', envName);
        grunt.option('usersJSONPath', usersJSONPath);
        grunt.option('seleniumAddress', seleniumAddress);
        grunt.option('format', 'pretty');

        if (format === 'json') {
            grunt.option('format', format);
            tasks.push('protractor-cucumber-html-report');
            withOrWithout = 'with';
        }
        grunt.log.writeln("I am launching tests on " + envName + " environment " + withOrWithout + " report using selenium " + seleniumAddress);
        console.log(tasks);
        grunt.task.run(tasks);
    }

    grunt.registerTask('debug', 'Generate sanity tests for NSE - with selected browser.', function () {
        var DEFAULT_ENV = 'stageCn',
            DEFAULT_BROWSER = commonOpts.BROWSERS.chrome,
            usersJSONPath,
            seleniumAddress,
            params = {
                envToRun: arguments[0] || DEFAULT_ENV,
                browser: commonOpts.BROWSERS[arguments[1]] || DEFAULT_BROWSER,
                generateReport: arguments[2] || false
            };

        usersJSONPath = commonOpts.getUsersJsonPath(params.envToRun);
        seleniumAddress = commonOpts.getSeleniumAddress();

        generateDebug(grunt, params.envToRun, params.browser, params.generateReport, usersJSONPath, seleniumAddress);
    });
};

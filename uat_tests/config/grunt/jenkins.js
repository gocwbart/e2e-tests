module.exports = function (grunt) {
    var commonOpts = require('./commonOpts');

    function generateSanity (grunt, envName, browser, withReport, usersJSONPath, seleniumAddress) {
        var tasks = commonOpts.getStartJenkinsTasks().concat(commonOpts.getRunTasks(':' + browser)),
            format = commonOpts.getReport(withReport),
            withOrWithout = 'without';
        grunt.option('protractorEnv', envName);
        grunt.option('usersJSONPath', usersJSONPath);
        grunt.option('seleniumAddress', seleniumAddress);
        grunt.option('format', 'pretty');

        if(format === 'json') {
            grunt.option('format', format);
            tasks.push('protractor-cucumber-html-report');
            withOrWithout = 'with';
        }
        grunt.log.writeln("I am launching tests on " + browser + " browser and " + envName + " environment " + withOrWithout + " report using selenium " + seleniumAddress);
        grunt.task.run(tasks);
    }

    grunt.registerTask('jenkins', 'Generate sanity tests for NSE - with selected browser.', function () {
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

        generateSanity(grunt, params.envToRun, params.browser, params.generateReport, usersJSONPath, seleniumAddress);
    });
};
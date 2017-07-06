var fs = require('fs'),
    commonOpts = (function () {
        const BROWSERS = {
            chrome: 'ch',
            mozilla: 'mf',
            ie: 'ie'
        };
        return {
            BROWSERS: BROWSERS,
            getStartTasks: function () {
                return ['selenium_standalone:e2e:install', 'selenium_standalone:e2e:start', 'clean:e2eReport'];
            },
            getStartJenkinsTasks: function () {
                return ['clean:e2eReport'];
            },
            getRunTasks: function (browser) {
                var addOptsTask = 'addOptsToConfig' + browser;
                return ['prepareOpts', 'template:protractor', addOptsTask, 'protractor'];
            },
            getReport: function (withReport) {
                if (withReport === 'true') {
                    return 'json';
                } else {
                    return 'pretty';
                }
            },
            getCapabilities: function (browser) {
                switch (browser) {
                    case 'ie':
                        return "{browserName: 'internet explorer'}";
                    case 'ch':
                        var path = require('path'),
                        absolutePath = path.resolve(__dirname + '/../../../uat_tests/tests/support/downloads/');
                        absolutePath = absolutePath.split('\\').join('\\\\');
                        return "{browserName: 'chrome',"
                            + "chromeOptions: {"
                            + "  'args': ['--test-type', 'show-fps-counter=true', '--web-security=no spec.js', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],"
                            + "'prefs': {"
                            + "'download': {"
                            + "'prompt_for_download': false,"
                            + "'default_directory': '" + absolutePath + "'}},},"
                            + "}";
                    case 'mf':
                        return "{browserName: 'firefox'}";
                    default:
                        return null;
                }
            },
            insertCapabilities: function (capability, grunt) {
                if (capability) {
                    var configContent = grunt.file.read('./uat_tests/config/protractor.cucumber.conf.js'),
                        config = './uat_tests/config/protractor.cucumber.conf.js',
                        configElem = "multiCapabilities: [";
                    configContent = configContent.replace(
                        configElem,
                        configElem + '\n' + '\t\t' + capability
                    );
                    fs.writeFileSync(config, configContent);
                }
            },
            eliminateDuplicates: function (arr) {
                var uniqueItems = arr.filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                });
                return uniqueItems;
            },
            getSeleniumAddress: function () {
                if (process.argv.indexOf('--grid') !== -1) {
                    return 'http://selenium.ci.ioki.pl:3333/wd/hub';
                } else {
                    return 'http://127.0.0.1:4444/wd/hub';
                }
            },
            getUsersJsonPath: function (env) {
                var testEnv = require('../test_env.json');
                return testEnv[env].testUsers;
            },
            getTag: function (grunt) {
                var gruntOptionPattern = /--@[a-z]*/g,
                    gruntParams = process.argv,
                    index = [],
                    config = './uat_tests/config/protractor.cucumber.conf.js',
                    configElemPattern = /format: \'[a-z]*\'[,]/g;
                gruntParams.forEach(function (val, i) {
                    if (val.match(gruntOptionPattern) !== null) {
                        index.push(i);
                    }
                });
                var tagWithDashes = process.argv[index];

                if (tagWithDashes) {
                    var tag = tagWithDashes.substring(2),
                        configContent = grunt.file.read('./uat_tests/config/protractor.cucumber.conf.js'),
                        elemToReplace = configContent.match(configElemPattern);
                    configContent = configContent.replace(
                        elemToReplace,
                        elemToReplace + '\n' + '\t\t' + "tags: [" + '\'' + tag + '\'' + "],"
                    );
                    fs.writeFileSync(config, configContent);
                }
            }

        };
    }());

module.exports = commonOpts;
module.exports = function (grunt) {
    'use strict';

    var configOptions = {
        config: {
            src: "./config/grunt/*.js"
        },
        appConfig: {
            PATH: 'app',
            DIST: 'dist',
            MOBILE_DIST: 'mobile-dist'
        },
        timestamp: new Date().getTime(),
        bower: grunt.file.readJSON('bower.json'),
        protractor: {
            cucumber: {
                options: {
                    configFile: 'uat_tests/config/protractor.cucumber.conf.js',
                    testJSONDirectory: 'uat_test/reports/json',
                    keepAlive: true
                }
            }
        },
        selenium_standalone: {
            options: {
                stopOnExit: true
            },
            e2e: {
                seleniumVersion: '2.53.1',
                seleniumDownloadURL: 'http://selenium-release.storage.googleapis.com',
                drivers: {
                    chrome: {
                        version: '2.28',
                        baseURL: 'http://chromedriver.storage.googleapis.com'
                    },
                    ie: {
                        version: '2.53.1',
                        arch: 'ia32',
                        baseURL: 'http://selenium-release.storage.googleapis.com'
                    }
                }
            }
        },
        'protractor-cucumber-html-report': {
            default_options: {
                options: {
                    dest: 'uat_tests/reports',
                    output: 'report.html',
                    testJSONDirectory: 'uat_tests/reports/json'
                }
            }
        }
    };

    var extend = require('extend');
    grunt.initConfig({
        clean: {
            e2eReport: {
                src: ['./uat_tests/reports']
            }
        },
        protractor: {
            cucumber: {
                options: {
                    configFile: './uat_tests/config/protractor.cucumber.conf.js',
                    testJSONDirectory: 'uat_test/reports/json',
                    keepAlive: true
                }
            }
        },
        watch: {
            js: {
                files: ['library/js/*.js'],
                tasks: ['concat:js', 'uglify:js'],
            },
            css: {
                files: ['library/less/*.less'],
                tasks: ['less:style'],
            },
            php : {
                files: ['**/*.php'],
            },
            options: {
                livereload: true,
                spawn: false
            }
        },
        selenium_standalone: {
            options: {
                stopOnExit: true
            },
            e2e: {
                seleniumVersion: '2.53.1',
                seleniumDownloadURL: 'http://selenium-release.storage.googleapis.com',
                drivers: {
                    chrome: {
                        version: '2.28',
                        baseURL: 'http://chromedriver.storage.googleapis.com'
                    },
                    ie: {
                        version: '2.53.1',
                        arch: 'ia32',
                        baseURL: 'http://selenium-release.storage.googleapis.com'
                    }
                }
            }
        },
        'protractor-cucumber-html-report': {
            default_options: {
                options: {
                    dest: 'uat_tests/reports',
                    output: 'report.html',
                    testJSONDirectory: 'uat_tests/reports/json'
                }
            }
        },
        template: {
            protractor: {
                options: {
                    data: function () {
                        var data = {};
                        var testEnv = require('./uat_tests/config/test_env.json'),
                            protractorEnv = grunt.option('protractorEnv'),
                            availableEnv = Object.keys(testEnv);

                        if (testEnv[protractorEnv]) {
                            data = extend(true, data, testEnv[protractorEnv]);
                            data.format = grunt.option('format');
                            data.usersJSONPath = grunt.option('usersJSONPath');
                            data.seleniumAddress = grunt.option('seleniumAddress');
                            data.specs = grunt.option('specs');
                        } else {
                            data = null;
                            grunt.fail.fatal('There is no '+ protractorEnv +' env. ' + 'Please use one of the following: ' + availableEnv + '. \n' +
                                'Make sure that arguments order is correct: grunt e2e:env:tag:withReport.');
                        }

                        return data;
                    }
                },
                files: {
                    'uat_tests/config/protractor.cucumber.conf.js' :  ['uat_tests/config/protractor.cucumber.conf.template.js']
                }

            }
        }
    });

    var configs = require('load-grunt-configs')(grunt, configOptions);
    require('load-grunt-tasks')(grunt);

    grunt.loadTasks('config/grunt/testsTasks');

    configs.app = configOptions.appConfig;
    configs.pkg = grunt.file.readJSON('package.json');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-selenium-standalone');
    grunt.loadTasks('uat_tests/config/grunt');
};
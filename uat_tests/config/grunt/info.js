module.exports = function (grunt) {
    grunt.registerTask('testInfo', 'Display tests info.', function () {
        var commonOpt = require('commonOpt'),
            testEnv = grunt.file.readJSON('./uat_tests/config/test_env.json'),
            protractorEnv = grunt.option('protractorEnv'),
            availableEnv = Object.keys(testEnv),
            path = './uat_tests/tests/features/',
            filePattern = /^.*\.(feature)$/;
        grunt.log.writeln("*********\nPlease use one of the beneath listed tasks: \n"
            + "sanity: to run all or selected sanity tests \n"
            + "e2e: to run all or selected end to end tests \n"
            + "regr: to run all or selected regression tests \n"
            + "\n*********");
        grunt.log.writeln("*********\nPlease use one of the beneath listed environment: \n" + availableEnv.sort().join(", ") + "\n*********");
        grunt.log.writeln("Please use one of the following tag:");
        grunt.file.recurse(path, function (abspath, rootdir, subdir, filename) {
            var feature = grunt.file.read(abspath),
                pattern = /(^|\n| )[@][a-zA-Z0-9]+/g,
                featureTags = feature.match(pattern),
                uniqueTags;
            if (filePattern.test(filename) && featureTags !== null) {
                uniqueTags = commonOpt.eliminateDuplicates(featureTags).join(", ");
                grunt.log.writeln(filename.replace(/.feature$/, '') + ": ", uniqueTags);
            }
        });
    });
};
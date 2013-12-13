
module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({

    jshint: {
      files: [
        'Gruntfile.js',
        'index.js',
        'routes.js',
        'test/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    mochaTest: {
      all: {
        src: 'test/**/*.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('build', ['jshint', 'mochaTest']);

};

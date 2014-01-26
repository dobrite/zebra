module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          mainConfigFile: "public/js/init.js",
          baseUrl: "public",
          name: "almond",
          include: "js/main",
          out: "public/js/zebra.js",
          findNestedDependencies: true,
          insertRequire: ['js/main'],
          wrap: true,
          paths: {
              'almond': "../node_modules/almond/almond"
          }
        }
      }
    },

    clean: {
      dist: [
        'public/js/zebra.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', ['clean', 'requirejs']);
  grunt.registerTask('default', 'build');

};

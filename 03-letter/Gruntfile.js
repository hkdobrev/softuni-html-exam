/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
      lib_test: {
        files: [ 'styles/**/*.css', '*.html' ],
        tasks: [],
        options: {
        	livereload: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['watch']);

};

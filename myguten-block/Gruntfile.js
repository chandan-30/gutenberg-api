module.exports = function(grunt) {
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'minified/edit.min.js': ['src/for-minify.js']
          }
        }
      },
      cssmin: {
        my_target: {
          files: {
            'minified/editor.min.css': ['src/for-minify.css']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    grunt.registerTask('default', ['uglify', 'cssmin']);
  };
  
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
        style: 'expanded'
        },
        files: {                         
          'src/styles/application.css': 'src/styles/application.scss',       // 'destination': 'source'
        }
      }
    },
		
		uglify: {
			build: {
				files: {
						'src/app/app.min.js': ['src/app/**/*.js']
				}
			},
			options: {
				mangle: false
			}
		},
		
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.registerTask('default', ['uglify']);

};
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	useminPrepare: {
	      html: 'index.html',
	      options: {
	        flow: {
	          html: {
	            steps: {
	              js: ['concat']
	            }
	          }
	        }
	      }
	    },
    	wiredep: {
	      task: {
	          src: ['index.html']
	        }
	    },
	    json: {
		    main: {
		        options: {
		            processName: function(filename) {
		            	console.log('teste');
		                return filename.toLowerCase();
		            }
		        },
		        src: ['package.json'],
		        dest: 'dist/json.js'
		    }
		},
		jsontojs: {
	      main: {
	        options: {
	          variable: 'config'
	        },
	        files: {
	          'tmp/config.js': ['package.json']
	        }
	      }
	    },
	    updatejsonfile: {
	    	options: {
	    		fields: {
	    			version: "2.0.5"
	    		}
	    	},
	    	files: {
	    		src: ['package.json']
	    	}
	    }
    });

	grunt.registerTask('default', ['wiredep','useminPrepare','concat:generated']);

	grunt.registerTask('json',['updatejsonfile']);

}
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'dist',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'dist',
                    environment: 'production'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'dist',
                    open: 'http://localhost:9000/'
                }
            }
        },

        copy: {
            docs: {
                expand: true,
                cwd: 'docs/',
                src: ['*'],
                dest: 'dist/',
            },
            public: {
                expand: true,
                cwd: 'public/',
                src: ['**/*'],
                dest: 'dist/',
            },
        },

        watch: {
            styles: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
                options: {
                    livereload: true
                },
            },
            docs: {
                files: ['docs/**/*'],
                tasks: ['copy:docs'],
                options: {
                    livereload: true
                }
            },
            public: {
                files: ['public/**/*'],
                tasks: ['copy:public'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['compass', 'copy']);
    // Default task(s).
    grunt.registerTask('default', ['compass', 'copy', 'connect', 'watch']);

};
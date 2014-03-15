module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.scss'],
                    dest: 'styles',
                    ext: '.css'
                }]
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['styles/*.scss','*.html'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.task.registerTask('default', ['watch']);
};
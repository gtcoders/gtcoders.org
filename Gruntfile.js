module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Development tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~

        // Compila codigo stylus a css
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                    'css/style.css' : 'css/style.styl',
                }
            }
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Deployment tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~

        // Concatena hojas de estilo
        concat: {
            main: {
                src:['css/style.css'],
                dest:'css/style.full.css'
            }
        },

        // MInifica hojas de estilo
        cssmin: {
            main: { src: 'css/style.full.css',    dest: 'css/style.min.css' }
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Watcher tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        watch: {
            stylus:{
                files: ['css/style.styl'],
                tasks: ['stylus:compile']
            },
        },

    });

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining deployment tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy', ['stylus:compile','concat:main','cssmin:main']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining Development tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('dev',['stylus:compile']);

};

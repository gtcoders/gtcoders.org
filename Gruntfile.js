module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Deployment tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        
        // Compila codigo stylus a css
        stylus:{
            compile:{
                options:{ 'compress': false },
                files:{
                }
            }
        },
        
        // Concatena hojas de estilo
        concat: {
            main: {
            }
        },
        
        // MInifica hojas de estilo
        cssmin: {
            main: {}
        },

        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        ///* Development tasks
        ///* ~·~ ~·~ ~·~ ~·~ ~·~
        
        // Linter para stylus
        stylint: {
            options: {
              configFile: false,
              config: {colons: 'never'}
            },
            src: ['']
          }
        
        // LInter para html
        htmllint: {
            files: ['']
        }
          
    });

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Including plugins and dependencies
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-stylint');
    grunt.loadNpmTasks('grunt-html');

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining deployment tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('deploy', ['stylus:compile','concat:main','cssmin:main']);

    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    ///* Running/defining Development tasks
    ///* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
    grunt.registerTask('dev',['stylint', 'htmllint']);
};

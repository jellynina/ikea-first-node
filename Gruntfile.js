/* Gruntfile.js */
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          /* Either use your config.rb for settings, or state them here */
          //config: 'config.rb'
          // require: ['susy'], // not susy yet.
          httpPath: "/",
          sassDir: "site/assets/stylesheets/src",
          cssDir: "site/assets/stylesheets/build",
          imagesDir: "site/assets/images",
          javascriptsDir: "site/assets/js",
          fontsDir: "site/assets/fonts",
          outputStyle: "compact",
          noLineComments: true,
          relativeAssets: true,
          raw: "preferred_syntax = :sass\n"
        }
      }
    },
  });
  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-compass');
  // Default task(s).
  grunt.registerTask('default', ['compass']);
};
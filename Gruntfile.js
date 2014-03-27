module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
        version: '0.9.2',
        build_dir: './build',
        mac_icns: './meta/apple-touch-icon.icns',
        mac: true
      },
      src: ['./js/**', './style/**', './meta/**', './index.html', './package.json', 'favicon.ico']
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', 'nodewebkit');
};

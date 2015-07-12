module.exports = {
  target: {
      options: {},
      files: [{
        expand: true,
        src: ['**/*.{html,htm,php}'],
        cwd: './',
        dest: 'build/'
      }]
    }
}
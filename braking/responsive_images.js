module.exports = {
 myTask: {
      options: {
        sizes: [{
            name: 'S',
          width: 320,
          height: 560,
          gravity: 'NorthWest',
          aspectRatio: false,
          filter: 'Triangle'
        },{
            name: 'M',
          width: 640,
        },{
          name: 'L',
          width: 640
        },{
          name: 'L',
          width: 1024,
          suffix: '_x2',
          quality: 60
        }]
      },
      files: [{
        expand: true,
        src: ['**.{jpg,gif,png}'],
        cwd: 'img/',
        custom_dest: 'build/img-min/{%= name %}'  
      }]
    }
}
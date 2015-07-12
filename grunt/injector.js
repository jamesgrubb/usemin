module.exports = {
  options : {
    template : 'index.html',
    relative : true,
    addRootSlash : false //removes / from the diectory
  },
  local_dependencies: {

    files : {
        'index.html' : ['js/*.js' , 'css/*.css' , 'bower.json'],
    }
  }
}
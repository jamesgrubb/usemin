module.exports = {
    makeitsmaller : {
        options : {
            progressive : true,
        },
    files : [{
        expand : true,
        dot: true,
        cwd : 'img/',
        dest : 'build/img-min/',
        src : ['**/*.{png,jpg,gif}'],
        rename : function(dest , src){
            return dest + src.replace('.' , '.min.');
        }
    }]

    }  
}
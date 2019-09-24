var fs = require("fs");
var path = require("path");
var ext = process.argv[3];
var dir = process.argv[2];
fs.readdir(dir, function callback(error, data){
    if(error) {return err}
    var l = data.length;
    for (var i = 0; i< l; i++){
        var x = data[i];
        var e = path.extname(x);
        if(e == "."+ext){
            console.log(x);
        }
    }
})
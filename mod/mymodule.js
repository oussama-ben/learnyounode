var fs = require('fs')
var path = require ('path')
module.exports=function(dirName,extStr,cb){
    var arr = [];
    fs.readdir(dirName,(err,data)=>{
        if(err){
            return cb(err)
        }
    
            var l = data.length;
            for(var i=0;i<l;i++){
                var x = data[i]
                var e = path.extname(x);
                if(e=="."+extStr){
                    arr.push(x);
                }
            }
        return cb(null,arr);
    })
}

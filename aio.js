const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if(error) return console.error(error)
    space = data.split('\n').length-1
    console.log(space)
})
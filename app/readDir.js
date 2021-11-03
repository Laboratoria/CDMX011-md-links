const fs = require ('fs');

const readingDirectoryFile = fs.readdirSync('../CDMX011-md-links', (files)=>{
    files.forEach(file => {
        console.log(file);
    });
    return readingDirectoryFile;
})


module.exports = {
    readingDirectoryFile
}
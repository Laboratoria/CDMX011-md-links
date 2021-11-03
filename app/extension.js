 const path = require('path');

 const extensionType = path.extname('README.md')


const readingExtensionFile = path.extname('../CDMX011-md-links', (files)=>{
    files.forEach(file => {
        console.log(file);
    });
    return readingExtensionFile;
})

module.exports = {
    extensionType,
    readingExtensionFile
}
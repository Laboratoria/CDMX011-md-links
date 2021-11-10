const fs = require ('fs');
const path = require ('path');

const readingDirectoryFile = (myArgs, containerPath = []) =>{
    const pathResolve = require ('path').resolve;
    const pathAbsolute = pathResolve(myArgs);
    if (fs.statSync(pathAbsolute).isDirectory() == true){
        const allFilesArray = fs.readdirSync(pathAbsolute)
        allFilesArray.forEach((file) => {
            const completePath = path.join(pathAbsolute, file);
            readingDirectoryFile(completePath, containerPath)
        })  
    }else if(path.extname(pathAbsolute) == '.md' || path.extname(pathAbsolute) == '.markdown'){
        containerPath.push(pathAbsolute);
    }
    return containerPath;
} 

module.exports = {
    readingDirectoryFile
}
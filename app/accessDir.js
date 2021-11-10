const path = require('path');

//Return true is the path is absolute
const directory = (dir) =>{
    const checkDir = path.isAbsolute(dir);
return checkDir;
}

module.exports = {
    directory
}
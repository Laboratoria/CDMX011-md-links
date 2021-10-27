const fs = require('fs');

const readFile = (pwd) => {
    const readingFile = fs.readFileSync(pwd).toString();
    return readingFile;

}

module.exports = {
    readFile
}
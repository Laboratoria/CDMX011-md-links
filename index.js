 const {linksReader} = require('./app/linkReader');
 const {readFile} = require('./app/fileReader');
 const {readingDirectoryFile} =require ('./app/readDir')
 const {extensionType, readingExtensionFile} = require ('./app/extension')
 const chalk = require('chalk');

 //console.log(linksReader('README.md'));
 //console.log(readFile('README.md'));
 console.log(readingDirectoryFile);
 console.log(extensionType);
 //console.log(readingExtensionFile);
 console.log(chalk.blueBright('FELIZ MIÉRCOLES'));

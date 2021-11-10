  const {linksReader} = require('./app/linkReader');
//  const {readFile} = require('./app/fileReader');
 const {readingDirectoryFile} =require ('./app/readDir');
//  const {directory} = require ('./app/accessDir');
//  const {extensionType} = require ('./app/extension');
//  const chalk = require('chalk');
 const myArgs = process.argv[2]
 const readDirFunction = readingDirectoryFile(myArgs);

console.log(linksReader(readDirFunction));
  //console.log(linksReader('README.md'));
//  console.log(readFile('README.md'));

 //console.log(chalk.magenta(extensionType)); //what type of extension the files has?
//  console.log(directory('./')); //The path is absolute?
//  console.log(chalk.blueBright('FELIZ MIÉRCOLES'));

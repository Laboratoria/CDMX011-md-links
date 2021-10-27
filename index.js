 const {linksReader} = require('./app/linkReader');
 const {readFile} = require('./app/fileReader');
 const chalk = require('chalk');

 //console.log(linksReader('README.md'));
 console.log(readFile('README.md'));
 console.log(chalk.blueBright('FELIZ MIÉRCOLES'));

 
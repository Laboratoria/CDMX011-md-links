 const {linksReader} = require('./app/linkReader');
 const chalk = require('chalk');

 console.log(linksReader('README.md'));
 console.log(chalk.blueBright('FELIZ MIÉRCOLES'));
 console.log('Testeando lo síncrono');
 
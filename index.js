const fs = require('fs');

// let system = os.platform();
// let name = os.hostname();
fs.appendFile('prueba-texto.txt', (error) => {
    if (error)  throw error;
   console.log('Success!!')  
});
//console.log(cpu);
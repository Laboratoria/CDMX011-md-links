const fetch = require("node-fetch");
const urls = require("./links.js");
const files = require("./files.js");
//const arr = urls.links(files.directorios(process.argv[2]));

const validate = (object) => {
  
  return fetch(object.href)
    .then((code) => {
      if (code.status >= 200 && code.status <= 299) {
        object.status = code.status;
        object.message = "ok";
        return object;
      } else {
        object.status = code.status;
        object.message = "fail";
        return object;
      }
    })
    .catch((err) => {
      if (err) {
        object.error = 'Failed validation'
      }
    });
}

function validateObj(arrayLinks) {
  return new Promise((res, rej) => {
    let arrLink = arrayLinks.map((item) => validate(item));
    res(Promise.all(arrLink));
  });
}

module.exports = {
  validateObj,
};

/*async function validation(url) {
  // fetch all the URLs in parallel
  const promises = url.map(async (item) => {
    try {
      const code = await fetch(item.href);
      if (code.status >= 200 && code.status <= 299) {
        item.status = code.status;
        item.message = "ok";
        return item;
      } else {
        item.status = code.status;
        item.message = "fail";
        return item;
      }
    } catch (err) {
      item.error = "Invalid Url";
      return item;
    }
  });

  let array = [];
  for (const promise of promises) {
    const arrData = await promise;
    array.push(arrData);
  }
  return array;
}*/
/*
validation(arr)
.then(data=>{
  console.log(data)
})*/
/*
module.exports = {
  validation,
};
*/

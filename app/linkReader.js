const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const linksReader = (pwd)  => {
    const newArray = [];
    pwd.map((mdPath) =>{
    const readingLinks = readFileSync(mdPath).toString();

    const links = markdownLinkExtractor(readingLinks, false);
    links.forEach(link => newArray.push(link))

    const details = markdownLinkExtractor(readingLinks, true);
    details.forEach(detail => newArray.push(detail));
        })
        return newArray;
}

 module.exports = {
     linksReader
 }

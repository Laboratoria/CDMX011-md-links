const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const linksReader = (pwd)  => {
const readingLinks = readFileSync(pwd).toString();

//const links = markdownLinkExtractor(readingLinks, false);
//links.forEach(link => console.log(link))

const details = markdownLinkExtractor(readingLinks, true);
details.forEach(detail => console.log(detail));
}

 module.exports = {
     linksReader
 }
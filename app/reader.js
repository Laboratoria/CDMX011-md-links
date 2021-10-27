const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const reader = (pwd)  =>{
    const reading = fs.readFileSync(pwd).toString();
    return reading;
}
const links = markdownLinkExtractor('',false);
links.forEach(link => console.log(link));

const details = markdownLinkExtractor('',true);
details.forEach(detail => console.log(detail));

module.exports = {
    reader
}
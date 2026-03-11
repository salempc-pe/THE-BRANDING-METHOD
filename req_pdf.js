const fs = require('fs');
const pdf = require('pdf-parse');
const dataBuffer = fs.readFileSync('the branding method (carolina kairos) (Z-Library).pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('book_text.txt', data.text);
    console.log('Done: ' + data.text.length + ' chars');
}).catch(console.error);

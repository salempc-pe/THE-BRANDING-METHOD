const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('the branding method (carolina kairos) (Z-Library).pdf');
const parseFn = typeof pdf === 'function' ? pdf : pdf.default || pdf;

parseFn(dataBuffer).then(function(data) {
    fs.writeFileSync('book_text.txt', data.text);
    console.log('PDF text extracted to book_text.txt (Length: ' + data.text.length + ' chars)');
}).catch(function(error){
    console.error('Error parsing PDF:', error);
});

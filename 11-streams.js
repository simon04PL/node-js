const fs = require('fs');
fs.truncateSync('./example2.txt', 0);
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('./example2.txt');

//readstream
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});


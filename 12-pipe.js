const fs = require('fs');
const zlib = require('zlib');

const inputFile = 'example2.txt.gz';
const outputFile = 'output.txt';

// Check if the input file exists and is not empty
fs.stat(inputFile, (err, stats) => {
  if (err) {
    console.error('An error occurred with input file:', err.message);
    return;
  }

  if (stats.size === 0) {
    console.error('Input file is empty');
    return;
  }

  const gunzip = zlib.createGunzip();
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  input.pipe(gunzip).pipe(output);

  gunzip.on('error', (err) => {
    console.error('An error occurred with gunzip:', err.message);
    // Handle the error appropriately here
  });

  input.on('error', (err) => {
    console.error('An error occurred with input file:', err.message);
    // Handle the error appropriately here
  });

  output.on('error', (err) => {
    console.error('An error occurred with output file:', err.message);
    // Handle the error appropriately here
  });
});
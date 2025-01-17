const fs = require('fs');

// rename the file after it has been created
fs.rename('example.txt', 'example2.txt', (err) => {
    if(err){
        console.log(err);
    }  
    else{
        console.log('Successfully renamed the file');
    }
});
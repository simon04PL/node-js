const fs = require('fs');

// edit the file after it has been created
fs.appendFile('example2.txt', 'Some data being appended', (err) => {
    if(err){
        console.log(err);
    }  
    else{
        console.log('Successfully appended data to the file');
    }
});
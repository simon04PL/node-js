const fs = require('fs');

//delate file
fs.unlink('example2.txt', (err) => {
    if(err){
        console.log(err);
    }  
    else{
        console.log('Successfully deleted the file');
    }
});
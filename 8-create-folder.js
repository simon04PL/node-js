const fs = require('fs');

//create folder
fs.mkdir('tutorial', (err) => {
    if(err)
        console.log(err);
    else{
        fs.writeFile('./tutorial/example.txt', '123', (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('File successfully created');
            }
        });
        console.log('Folder successfully created');
    }
});
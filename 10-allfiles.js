const fs = require('fs');

//delate all files in folder
fs.readdir('tutorial', (err, files) => {
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./tutorial/' + file, (err) => {
                if(err)
                    console.log(err);
                else{
                    console.log('Successfully deleted file');
                }
            });
        }
    }
});
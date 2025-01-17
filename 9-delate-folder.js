const fs = require('fs');

// delete folder
fs.rm('tutorial', { recursive: true, force: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder successfully deleted');
    }
});
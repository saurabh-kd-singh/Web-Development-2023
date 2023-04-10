const fs = require('fs');


// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

// console.log("Last Line");


// writing files

// fs.writeFile('./docs/blog1.txt', 'New Text', () => {
//     console.log('File was written First');
// });


// fs.writeFile('./docs/blog2.txt', 'New Text', () => {
//     console.log('File was written Second');
// });

// directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Folder Created");
        }
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Folder Deleted');
        }
    });
}

// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File Deleted');
    })
}
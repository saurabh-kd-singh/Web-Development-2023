const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog5.txt');

// readStream.on('data', (chunk) => {
//     console.log('---------------------New Chunk-------------------------------');
//     // console.log(chunk);
//     writeStream.write('\n New Line \n');
//     writeStream.write(chunk);

// })

readStream.pipe(writeStream);


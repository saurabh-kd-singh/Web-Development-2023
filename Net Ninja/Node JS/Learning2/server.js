const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
    
    // Lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello');
    });

    greet();
    greet();

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Send an HTML File
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });
})


// Constantly listens for a request
server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000');
})


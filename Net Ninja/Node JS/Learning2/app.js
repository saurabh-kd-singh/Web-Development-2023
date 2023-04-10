const express = require('express');
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3600);

app.get('/', (req, res) => {
    
    const blogs = [ 
        {title: 'Blog One', snippet: 'one one one one'},
        {title: 'Blog Two', snippet: 'Two Two Two Two'},
        {title: 'Blog Three', snippet: 'Three Three Three Three'}
    ];

    res.render('index', {title: 'Blog Home', blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About Blog'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'});
});
const express = require('express');
require('dotenv').config(); // Getting all the environment variables.

const app = express();

// routes
const baseRouter = require('./routes/base');


// app configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Setting static folders.
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/favicon.ico', express.static(__dirname + '/favicon.ico'));
app.set('view engine', 'ejs');

// All routes for our website.
app.use('/', baseRouter);


// redirecting every other requests as error
app.use((req, res) => {
    res.status(404).render('404')
});

// Listen @ designated port
const PORT = process.env.NODE_PORT || 3333;
app.listen(PORT, () => {
    console.log(`Alive @ localhost:${PORT}`);
});

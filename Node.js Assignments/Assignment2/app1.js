const http = require('http');



const express = require('express');
const app = express();

// now we have to use appl.use() for the middleware

app.use('/users', (req, res, next) => {
    console.log('This is middleware of Assignment2');
    res.send('<h1>This is Assignment 2 middleware</h1>')
});

app.use('/users-another', (req, res, next) => {
    console.log('This is middleware of Assignment2(user another)');
    res.send('<h1>This is Assignment 2 middleware(user another)</h1>')
});

//always keep bydefult middleware at last position
app.use('/', (req, res, next) => {
    console.log('This is alwars runs');
    res.send('<h1>This is home page of asssignment 2</h1>')
    // next();
});



app.listen(5000);
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const credentials = require('./API/routes/credentials');
const messages = require('./API/routes/messages');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes which should handle requests
app.use('/credentials', credentials);
app.use('/messages', messages);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
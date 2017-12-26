const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/ping', function(req, res) {
	res.send('PONG');
});

module.exports = app;
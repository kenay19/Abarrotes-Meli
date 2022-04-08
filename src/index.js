// Modulos

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const session = require('express-session');

// Configurations

server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.engine('.hbs', exphbs.engine({
    defaultLayout: 'main.hbs',
    LayoutsDir: path.join(server.get('views'), 'layouts'),
    PartialsDir:  path.join(server.get('views'), 'partials'),
    extname: '.hbs'
}));
server.set('view engine', '.hbs');

// initializations

// middlewares

server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(session({
    secret: process.env.SESSION_SECRET || 'production2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

// routes 

server.use(require(path.join(__dirname, 'routes')));

// public files 

server.use(express.static(path.join(__dirname, 'public')));

// Server listening

server.listen(server.get('port'), (request,response) => {
    console.log('listening on port: ', server.get('port'));
});
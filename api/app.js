require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/database');


mongoose.connect(config.database);
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send('Page under construction.');
});

// ************* ROUTING *************
const apiUsers = require('./routes/users');     // eslint-disable-line import/newline-after-import
app.use('/api/users', apiUsers);

const apiSanyrRouter = require('./routes/sanyr_router');    // eslint-disable-line import/newline-after-import
app.use('/api/sanyr', apiSanyrRouter);

const apiSanyRedRouter = require('./routes/sanyred_router');    // eslint-disable-line import/newline-after-import
app.use('/api/sanyred', apiSanyRedRouter);

app.use('*', (req, res) => {
    res.send('not found!');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// **************************************
module.exports = app;

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import express from 'express';
import path from 'path';
import dbController from './controller/DbController';
import mongoose from 'mongoose';
import indexRouter from './routes/index';
import blogRouter from './routes/blog';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/blog', blogRouter);

dbController();

app.use(function (req: any, res: any, next: Function) {
  next(createError(404));
});

app.use(function (err: any, req: any, res: any, next: Function) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export default app;


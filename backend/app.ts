import createError from "http-errors"
import express, { Request, Response, NextFunction } from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import dbController from "./controller/DbController"
import Router from "./routes/router"
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Router.Index);
app.use('/blog', Router.Blog);
app.use('/user', Router.User);

dbController();

app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

app.use(function (err: any, req: Request, res: Response) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export default app;


import express from 'express';
const router = express.Router();
const Posts = require('../models/Posts');


/* GET home page. */
router.get('/', function (req: any, res: any, next: Function) {
  res.render('index', { title: 'Express' });
});

export default router;

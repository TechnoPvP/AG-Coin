const router = require('express').Router();
const Posts = require('../models/Posts');

/* GET home page. */
router.get('/:slug', async function (req, res, next) {
    // res.render('index', { title: 'Express' });
    const slug = req.params.slug;
    const query = await Posts.findOne({title: slug});
    res.send(query ?? 'Result not found');
});

/* GET home page. */
router.post('/', function (req, res, next) {
    const { title, difficulty, date, body, tags } = req.body;
    const post = new Posts({ title, difficulty, date, body, tags: tags.split(',') });

    post.save().then((val) => {
        res.status(200).send(`Created new blog post ${title}`);
        console.log(val);
    }).catch(() => {
        console.log(new Error(`Error creating post: ${err}`))
        res.status(500).send(`Failed to save blog post ${title}`);
    });
});

module.exports = router;
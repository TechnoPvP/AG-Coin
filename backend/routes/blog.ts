import { Router, Request, Response } from "express"
import Blogs from "../models/Blog"
const router = Router();

/* GET home page. */
router.get('/:slug', async function (req: Request, res: Response) {
    // res.render('index', { title: 'Express' });
    const slug = req.params.slug;
    const query = await Blogs.findOne({title: slug});
    res.send(query ?? 'Result not found');
});

/* GET home page. */
router.post('/', async (req: Request, res: Response) => {
    const { title, difficulty, date, body, tags } = req.body;
    const blog = new Blogs({ title, difficulty, date, body, tags: tags.split(',') });
    
    try {
        const value = await blog.save()
        res.status(200)
           .send(`Created new blog post ${title}`)
        
        console.log( value )
    } catch (err) {
        console.log(new Error(`Error creating post: ${err}`))
        res.status(500).send(`Failed to save blog post ${title}`);
    }
});

export default router

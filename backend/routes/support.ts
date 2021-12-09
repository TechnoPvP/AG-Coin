import { Router, Request, Response, NextFunction } from 'express'
import Support from '../models/Support';
import validate from '../validation/SupportV';
const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const limit = Number(req.query.limit);
    if (!limit && req.query.limit) {
        res.send('Limit query param must be a number greater than 0');
        return;
    }
    const result = await Support.find({}).limit(limit || 0).exec();

    res.send(result);
})

router.get('/:slug', async (req: Request, res: Response, next: NextFunction) => {
    const slug = req.params.slug;
    const result = await Support.findOne({ slug }).exec();

    if (!result) {
        res.status(404).json({ error: `${slug} does not exsist.` })
        return;
    }

    res.send(result);
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = validate.validate(req.body, { abortEarly: false });
    if (error) {
        res.status(400).send(error.message);
        return;
    }
    const { slug, title, topics, content } = req.body;

    try {
        const query = await Support.create({ slug, title, content })
        res.status(200).send(query);
    } catch (err: any) {
        if (err?.code == 11000) {
            res.status(500).json({ error: 'Slug must be unique' })
            return;
        }
        res.status(400).json(err);
    }
})

router.delete('/:slug', async (req: Request, res: Response, next: NextFunction) => {
    const slug = req.params.slug;

    try {
        const query = await Support.deleteOne({ slug }).exec()
        if (query.deletedCount == 0) {
            res.status(404).json({ error: `Deleting support item ${slug} failed. Item does not exsist.` })
            return;
        }
        res.status(200).send(query)
    } catch (err) {
        res.status(500).json({ error: 'Slug must be unique' })
        return;
    }
})

/* TODO: Validate incoming response. */
router.put('/:slug', async (req: Request, res: Response, next: NextFunction) => {
    const { slug, title, topics, content } = req.body;
    try {
        const query = await Support.findOneAndUpdate({ slug: req.params.slug }, { slug, title, content, topics }, { new: true })
        if (!query) {
            res.status(404).json({ error: `Updating ${slug} does not exsist.` })
            return;
        }
        res.status(200).send(query);
    } catch (err: any) {
        res.status(400).json(err);
    }
})

export default router;

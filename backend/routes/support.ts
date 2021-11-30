import { Router, Request, Response, NextFunction } from 'express'
import Support from '../models/Support';
import validate from '../validation/supportV';
const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const result = await Support.find({});

    res.send(result);
})

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const errors = validate.validate(req.body, {abortEarly: false});
    if (errors) {
        res.send( errors.error?.message);
        return;
    }

    const { slug, title, topics, content } = req.body;
    res.status(400).send(req.body)
})

router.delete('/', (req: Request, res: Response, next: NextFunction) => {

})

router.put('/', (req: Request, res: Response, next: NextFunction) => {

})

export default router;

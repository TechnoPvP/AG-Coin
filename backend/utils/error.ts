import { Request, Response } from 'express';

export const onErr = (res: Response, error: string, status = 400) => {
    res.status(status).json({ error })
}

import { type Request, type Response, type NextFunction } from 'express';

export const index = (req: Request, res: Response, next: NextFunction): void => {
    res.send('respond with a resource');
};

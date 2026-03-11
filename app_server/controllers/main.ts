import { type Request, type Response, type NextFunction } from 'express';

/* GET home page */
export const index = (req: Request, res: Response, next: NextFunction): void => {
    res.render('index', { title: 'Express' });
};

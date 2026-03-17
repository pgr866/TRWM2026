import { type Request, type Response, type NextFunction } from 'express';

/* GET 'about' page */
export const about = (req: Request, res: Response, next: NextFunction): void => {
    res.render('index', { title: 'About' });
};
